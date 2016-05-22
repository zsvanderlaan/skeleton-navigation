import {Roles} from "./roles";
import {ApiFetchService} from "./apiFetchService";
import {inject} from "aurelia-dependency-injection";
import {autoconfigure} from "./coreTools";
import {GetRolesResponseValidationService} from "./GetRolesResponseValidationService";
import {EventAggregator} from "aurelia-event-aggregator";
import {HttpClient} from "aurelia-fetch-client";
import {ApiResponseEvent, ApiResponseEventConfiguration} from "./apiResponseEvent";
import {ApiResponseErrorEvent, ApiResponseErrorEventConfiguration} from "./apiResponseErrorEvent";
import {Factory} from "aurelia-dependency-injection";

export class GetRolesFetchServiceConfiguration {

  constructor(
    public activateOnConstruction: boolean
    , public hasBody: boolean
  ) {
    this.activateOnConstruction = (undefined !== this.activateOnConstruction) ? this.activateOnConstruction : true;
    this.hasBody = (undefined !== this.hasBody) ? this.hasBody : true;
  }
}

@inject(
  HttpClient
  , EventAggregator
  , GetRolesResponseValidationService
  , Factory.of(ApiResponseEvent)
  , Factory.of(ApiResponseErrorEvent)
)
export class GetRolesFetchServiceDependencies {

  constructor(
    public _http: HttpClient
    , public _eventAggregator: EventAggregator
    , public _apiResponseValidationService: GetRolesResponseValidationService
    , public _apiResponseEventFactory: (configuration: ApiResponseEventConfiguration) => ApiResponseEvent
    , public _apiResponseErrorEventFactory: (configuration: ApiResponseErrorEventConfiguration) => ApiResponseErrorEvent
  ) {

  }
}

@autoconfigure()
@inject(GetRolesFetchServiceDependencies)
export class GetRolesFetchService extends ApiFetchService{

  constructor(
    _dependencies: GetRolesFetchServiceDependencies
    , _configuration: GetRolesFetchServiceConfiguration) {

    super(_dependencies, _configuration);
  }

  protected getApiRoute(): Request | string {
    return 'ApiRoute/Roles/GET';
  }

  protected getRequestMethod(): string {
    return 'POST';
  }

  protected getEventType(): Function | string {
    return Roles;
  }
}
