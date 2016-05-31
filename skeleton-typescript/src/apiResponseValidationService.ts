import {ApiResponseEvent} from "./apiResponseEvent";
import {ValidationResult} from "./validationResult";
import {
  ApiResponseValidationSuccessEvent,
  ApiResponseValidationSuccessEventConfiguration
} from "./apiResponseValidationSuccessEvent";
import {
  ApiResponseValidationErrorEvent,
  ApiResponseValidationErrorEventConfiguration
} from "./apiResponseValidationErrorEvent";
import {EventAggregator} from "aurelia-event-aggregator";
import {ApiResponseValidator} from "./apiResponseValidator";
import {inject} from "aurelia-dependency-injection";
import {Factory} from "aurelia-dependency-injection";

/*
 *   ApiResponseValidationService
 *
 *   A service to validate data retrieved from the api
 *
 *   Subscribes to ApiResponseEvent event channel
 *
 *   On ApiResponseEvent: validate response object structure
 *     Success: emit an apiResponseValidationSuccessEvent
 *     Failure: emit an apiResponseValidationErrorEvent
 *
 */

export class ApiResponseValidationServiceConfiguration {

  constructor(
    public eventType: Function | string
  ) { }

}

@inject( // For the time being we need to use @inject because of the factories
  EventAggregator
  , ApiResponseValidator
  , Factory.of(ApiResponseValidationSuccessEvent)
  , Factory.of(ApiResponseValidationErrorEvent)
)
export class ApiResponseValidationServiceDependencies {

  constructor(
    public _eventAggregator: EventAggregator
    , public _apiResponseValidator: ApiResponseValidator
    , public _apiResponseValidationSuccessEventFactory: (configuration: ApiResponseValidationSuccessEventConfiguration) => ApiResponseValidationSuccessEvent
    , public _apiResponseValidationErrorEventFactory: (configuration: ApiResponseValidationErrorEventConfiguration) => ApiResponseValidationErrorEvent
  ) { }
}

// todo: make me not abstract
@inject(ApiResponseValidationServiceDependencies)
export abstract class ApiResponseValidationService {

  constructor(
    private _dependencies: ApiResponseValidationServiceDependencies
    , private _configuration: ApiResponseValidationServiceConfiguration
  ) {

    if (this.activateOnConstruction) { this.activate(); }
  }

  //@subscribeEventHandlers()
  // https://github.com/aurelia/event-aggregator/issues/17
  public activate() {
    if (true === this.isActive) { return; }

    this.createApiResponseEventSubscription();

    this.isActive = true;
  }

  //@unsubscribeEventHandlers()
  public deactivate() {
    if (false === this.isActive) { return; }

    this.dispose();

    this.isActive = false;
  }

  protected isActive: boolean = false;                        // default to inActive
  protected activateOnConstruction: boolean = true;           // default to autoActivate

  //@handleEvent(ApiResponseEvent)
  protected onApiResponseEvent(event: ApiResponseEvent) {
    // todo: Improve me by making subscribe be to a descriptive enough channel that this test is not needed
    if (event.isResponseFor(this._configuration.eventType)) { this.validate(event.getResponseData()); }
  }

  protected validate(data: any): void {
    this.handleValidationResult(this._dependencies._apiResponseValidator.validate(this._configuration.eventType, data));
  }
  
  protected handleValidationResult(validationResult: ValidationResult) {

    if (validationResult.isValid()) {
      this.handleValidationSuccess(this._dependencies._apiResponseValidationSuccessEventFactory(new ApiResponseValidationSuccessEventConfiguration(this._configuration.eventType, validationResult.getValidatedData())));
    }
    else {
      this.handleValidationFailure(this._dependencies._apiResponseValidationErrorEventFactory(new ApiResponseValidationErrorEventConfiguration(this._configuration.eventType, validationResult.getValidatedData(), validationResult.getValidationErrors())));
    }
  }

  protected handleValidationSuccess(event: ApiResponseValidationSuccessEvent) {
    this._dependencies._eventAggregator.publish(event);
  }

  protected handleValidationFailure(event: ApiResponseValidationErrorEvent) {
    this._dependencies._eventAggregator.publish(event);
  }

  protected createApiResponseEventSubscription() {

    let event: string | Function = ApiResponseEvent;
    let handler = (event: ApiResponseEvent) => { this.onApiResponseEvent(event); };

    this._disposables.push(this._dependencies._eventAggregator.subscribe(event, handler));
  }

  protected dispose() {
    this._disposables.forEach((disposable) => { disposable.dispose(); });
  }

  private _disposables: Array<any> = [];
}
