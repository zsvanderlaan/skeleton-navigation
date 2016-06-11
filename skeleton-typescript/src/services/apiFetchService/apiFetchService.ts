import {ApiRequestEvent} from "../../apiRequestEvent";
import {inject} from "aurelia-dependency-injection";
import {ApiResponseEventConfiguration, ApiResponseEvent} from "../../apiResponseEvent";
import {ApiResponseErrorEventConfiguration, ApiResponseErrorEvent} from "../../apiResponseErrorEvent";
import {ApiFetchServiceConfiguration} from "./apiFetchServiceConfiguration";
import {ApiFetchServiceDependencies} from "./apiFetchServiceDependencies";
import {IApiFetchServiceBase} from "./iApiFetchServiceBase";
import {IApiFetchService} from "./iApiFetchService";

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

@inject(ApiFetchServiceDependencies)
export class ApiFetchService extends IApiFetchServiceBase implements IApiFetchService {

  constructor(
    dependencies: ApiFetchServiceDependencies
    , configuration: ApiFetchServiceConfiguration
  ) {
    super(dependencies, configuration);

    // todo: create method registerEventHandler for verbosity and so that we do not access to the array.
    this.eventHandlers.push({eventType: ApiRequestEvent, eventHandler: this.onApiRequestEvent});
  }

  public onApiRequestEvent(event: ApiRequestEvent) {
    // todo: Improve me by making subscribe be to a descriptive enough channel that this test is not needed
    if ( event.requestType === this.responseType ) { this.fetch(); }
  }

  protected fetch() {
    this.http.fetch(this.apiRoute, {
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

  protected encodeBody(): string {

    if (false === this.hasBody) { return ''; }
    else { return JSON.stringify(this.body); }
  }
  
  protected handleResponse(response: Response) {

    // todo: add error type information
    if (response.ok) { response.json().then(data => { this.publishApiResponse(data); }); }
    else { this.handleError(response); }
  }

  protected handleError(error) {
    this.publishEvent(ApiResponseErrorEvent, new ApiResponseErrorEventConfiguration(this.responseType, error));
  }

  protected publishApiResponse(data) {
    this.publishEvent(ApiResponseEvent, new ApiResponseEventConfiguration(this.responseType, data));
  }
}
