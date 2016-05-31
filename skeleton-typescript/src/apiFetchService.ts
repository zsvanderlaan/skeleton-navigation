import {ApiRequestEvent} from "./apiRequestEvent";
import {ApiResponseValidationService} from "./apiResponseValidationService";
import {EventAggregator} from "aurelia-event-aggregator";
import {HttpClient} from "aurelia-fetch-client";
import {inject} from "aurelia-dependency-injection";
import {ApiResponseEvent, ApiResponseEventConfiguration} from "./apiResponseEvent";
import {Factory} from "aurelia-dependency-injection";
import {ApiResponseErrorEvent, ApiResponseErrorEventConfiguration} from "./apiResponseErrorEvent";
import {compose} from "./coreTools";
import {Activatable, IActivatable} from "./infrastructure/mixins/activatable";

/*
 *   ApiFetchService
 *
 *   A service to fetch data from the api
 *
 *   Subscribes to ApiRequestEvent event channel
 *
 *   On ApiRequestEvent: fetch from the api
 *     Success: emit an apiResponseEvent
 *     Failure: emit an apiResponseErrorEvent
 *
 */

export class ApiFetchServiceConfiguration {

  public requestMethod: string = 'GET';

  public activateOnConstruction: boolean = true;
  public isActive: boolean = false;

  public hasBody: boolean = false;
  public body: Object = Object.create(Object);

  // todo: create map of route to responseType so that route does not have to be provided as a param
  public apiRoute: Request | string;

  public disposables: Array<any> = [];

  constructor(
    public responseType: Function | string
  ) {

  }
}

@inject(
  HttpClient
  , EventAggregator
  , ApiResponseValidationService
  , Factory.of(ApiResponseEvent)
  , Factory.of(ApiResponseErrorEvent)
)
export class ApiFetchServiceDependencies {
  constructor(
    public _http: HttpClient
    , public _eventAggregator: EventAggregator
    , public _apiResponseValidationService: ApiResponseValidationService
    , public _apiResponseEventFactory: (configuration: ApiResponseEventConfiguration) => ApiResponseEvent
    , public _apiResponseErrorEventFactory: (configuration: ApiResponseErrorEventConfiguration) => ApiResponseErrorEvent
  ) { }
}

export interface IApiFetchService extends Activatable, ApiFetchServiceConfiguration, ApiFetchServiceDependencies
{
  new(_dependencies: ApiFetchServiceDependencies, _configuration: ApiFetchServiceConfiguration): IApiFetchService;
  (_dependencies: ApiFetchServiceDependencies, _configuration: ApiFetchServiceConfiguration): void;
}

export let IApiFetchService = compose(
  Activatable
  , ApiFetchServiceConfiguration
  , ApiFetchServiceDependencies
) as IApiFetchService;


// todo: make me not abstract. inherit via decorators so that we control the implementation
@inject(ApiFetchServiceDependencies)
export class ApiFetchService extends IApiFetchService {

  constructor(
    _dependencies: ApiFetchServiceDependencies
    , _configuration: ApiFetchServiceConfiguration
  ) {
    debugger;
    super(_dependencies, _configuration);
  }

  //@subscribeEventHandlers()
  // https://github.com/aurelia/event-aggregator/issues/17
  public activate() {
    if (true === this.isActive) { return; }

    this.createApiRequestEventSubscription();

    super.activate()
  }

  //@unsubscribeEventHandlers()
  public deactivate() {
    if (false === this.isActive) { return; }

    this.dispose();

    this.isActive = false;
  }

  protected encodeBody(): string {

    if (false === this.hasBody) { return ''; }
    else { return JSON.stringify(this.body); }
  }

  //@withValidationInterceptor(this.requestType)
  protected fetch() {
    this._http.fetch(this.apiRoute, {
        'credentials': 'same-origin',
        'method': this.requestMethod,
        'headers': {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        'body': this.encodeBody()
      })
      .then((response) => { this.handleResponse(response); })
      .catch((error) => { this.handleError(error); });
  }

  protected handleResponse(response: Response) {

    if (response.ok) {
      response.json()
        .then((data) => {
          this._eventAggregator.publish(this._apiResponseEventFactory(new ApiResponseEventConfiguration(this.responseType, data)))
        });
    }
    else {
      this.handleError(response); // todo: add type information
    }
  }

  protected handleError(error) {
    this._eventAggregator.publish(this._apiResponseErrorEventFactory(new ApiResponseErrorEventConfiguration(this.responseType, error)));
  }

  //@handleEvent(ApiRequestEvent)
  protected onApiRequestEvent(event: ApiRequestEvent) {
    // todo: Improve me by making subscribe be to a descriptive enough channel that this test is not needed
    if ( event.requestType === this.responseType ) { this.fetch(); }
  }

  protected createApiRequestEventSubscription() {

    let event: string | Function = ApiRequestEvent;
    let handler = (event: ApiRequestEvent) => { this.onApiRequestEvent(event); };

    this.disposables.push(this._eventAggregator.subscribe(event, handler));
  }

  protected dispose() {
    this.disposables.forEach((disposable) => { disposable.dispose(); });
  }
}
