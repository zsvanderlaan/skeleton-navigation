import {ApiResponseValidationService} from "./apiResponseValidationService";
import {Roles} from "./roles";
import {inject} from "aurelia-dependency-injection";
import {autoconfigure} from "./coreTools";
import {
  ApiResponseValidationErrorEvent,
  ApiResponseValidationErrorEventConfiguration
} from "./apiResponseValidationErrorEvent";
import {
  ApiResponseValidationSuccessEvent,
  ApiResponseValidationSuccessEventConfiguration
} from "./apiResponseValidationSuccessEvent";
import {ApiResponseValidator} from "./apiResponseValidator";
import {EventAggregator} from "aurelia-event-aggregator";
import {Factory} from "aurelia-dependency-injection";

export class GetRolesResponseValidationServiceConfiguration { }

@inject( // For the time being we need to use @inject because of the factories
  EventAggregator
  , ApiResponseValidator
  , Factory.of(ApiResponseValidationSuccessEvent)
  , Factory.of(ApiResponseValidationErrorEvent)
)
export class GetRolesResponseValidationServiceDependencies {
  
  constructor(
    public _eventAggregator: EventAggregator
    , public _apiResponseValidator: ApiResponseValidator
    , public _apiResponseValidationSuccessEventFactory: (configuration: ApiResponseValidationSuccessEventConfiguration) => ApiResponseValidationSuccessEvent
    , public _apiResponseValidationErrorEventFactory: (configuration: ApiResponseValidationErrorEventConfiguration) => ApiResponseValidationErrorEvent
  ) { }
}

@autoconfigure()
@inject(GetRolesResponseValidationServiceDependencies)
export class GetRolesResponseValidationService extends ApiResponseValidationService {

  constructor(
    private _dependencies: GetRolesResponseValidationServiceDependencies
    , private _configuration: GetRolesResponseValidationServiceConfiguration
  ) {
    super(_dependencies, _configuration);
  }
  
  protected getEventType(): Function | string {
    return Roles;
  }
}
