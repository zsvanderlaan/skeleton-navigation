import {ApiRequestEvent} from "./apiRequestEvent";
import {ApiResponseValidationService} from "./apiResponseValidationService";
import {EventAggregator} from "aurelia-event-aggregator";
import {HttpClient} from "aurelia-fetch-client";
import {inject} from "aurelia-dependency-injection";
import {autoconfigure} from "./coreTools";
import {ApiResponseEvent, ApiResponseEventConfiguration} from "./apiResponseEvent";
import {Factory} from "aurelia-dependency-injection";
import {ApiResponseErrorEvent, ApiResponseErrorEventConfiguration} from "./apiResponseErrorEvent";

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

  constructor(
    public activateOnConstruction: boolean
    , public hasBody: boolean
  ) {
    this.activateOnConstruction = (undefined !== this.activateOnConstruction) ? this.activateOnConstruction : true;
    this.hasBody = (undefined !== this.hasBody) ? this.hasBody : true;
  }
}

@inject(
  EventAggregator
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


@autoconfigure()
// todo: make me not abstract. inherit via decorators so that we control the implementation
@inject(ApiFetchServiceDependencies)
export abstract class ApiFetchService {

  constructor(
    private _injectedParams: ApiFetchServiceDependencies
    , private _configuration: ApiFetchServiceConfiguration
  ) {

    // todo: make this a feature of autoconfigure()
    if (this._configuration.activateOnConstruction) { this.activate(); }
  }

  //@subscribeEventHandlers()
  // https://github.com/aurelia/event-aggregator/issues/17
  public activate() {
    if (true === this.isActive) { return; }

    this.createApiRequestEventSubscription();

    this.isActive = true;
  }

  //@unsubscribeEventHandlers()
  public deactivate() {
    if (false === this.isActive) { return; }

    this.dispose();

    this.isActive = false;
  }

  protected abstract getApiRoute(): Request | string
  protected abstract getRequestMethod(): string
  protected abstract getEventType(): Function | string

  protected isActive: boolean = false;                        // default to inActive
  protected hasBody: boolean = true;                          // default to have a request body

  protected getBody(): Object {
    return Object.create(Object);
  }

  protected renderBody(): string {

    if (false === this.hasBody) { return ''; }
    else { return this.encodeBody(this.getBody()); }
  }

  protected encodeBody(body: Object): string {
    return JSON.stringify(body);
  }

  //@withValidationInterceptor(this.requestType)
  protected fetch() {
    this._injectedParams._http.fetch(this.getApiRoute(), {
        'credentials': 'same-origin',
        'method': this.getRequestMethod(),
        'headers': {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        'body': this.renderBody()
      })
      .then((response) => { this.handleResponse(response); })
      .catch((error) => { this.handleError(error); });
  }

  protected handleResponse(response: Response) {

    if (response.ok) {
      response.json()
        .then((data) => {
          this._injectedParams._eventAggregator.publish(this._injectedParams._apiResponseEventFactory(new ApiResponseEventConfiguration(this.getEventType(), data)))
        });
    }
    else {
      this.handleError(response); // todo: add type information
    }
  }

  protected handleError(error) {
    this._injectedParams._eventAggregator.publish(this._injectedParams._apiResponseErrorEventFactory(new ApiResponseErrorEventConfiguration(this.getEventType(), error)));
  }

  //@handleEvent(ApiRequestEvent)
  protected onApiRequestEvent(event: ApiRequestEvent) {
    // todo: Improve me by making subscribe be to a descriptive enough channel that this test is not needed
    if ( event.requestType === this.getEventType() ) { this.fetch(); }
  }

  protected createApiRequestEventSubscription() {

    let event: string | Function = ApiRequestEvent;
    let handler = (event: ApiRequestEvent) => { this.onApiRequestEvent(event); };

    this._disposables.push(this._injectedParams._eventAggregator.subscribe(event, handler));
  }

  protected dispose() {
    this._disposables.forEach((disposable) => { disposable.dispose(); });
  }

  private _disposables: Array<any> = [];
}
