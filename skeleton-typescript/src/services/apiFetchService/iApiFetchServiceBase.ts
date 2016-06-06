import {ApiFetchServiceDependencies} from "./apiFetchServiceDependencies";
import {ApiFetchServiceConfiguration} from "./apiFetchServiceConfiguration";
import {ApiRequestEvent} from "../../apiRequestEvent";
import {Activatable} from "../../infrastructure/mixins/activatable/activatable";
import {EventSubscriber} from "../../infrastructure/mixins/eventSubscriber/eventSubscriber";
import {EventPublisher} from "../../infrastructure/mixins/eventPublisher/eventPublisher";
import {compose} from "../../infrastructure/mixins/Compose";

export interface IApiFetchServiceStatic {
  new(_dependencies: ApiFetchServiceDependencies, _configuration: ApiFetchServiceConfiguration): IApiFetchServiceBase;
  (_dependencies: ApiFetchServiceDependencies, _configuration: ApiFetchServiceConfiguration): void;
}

export interface IApiFetchServiceBase extends Activatable, EventSubscriber, EventPublisher, ApiFetchServiceConfiguration, ApiFetchServiceDependencies {
  
}

export let IApiFetchServiceBase = compose(
  Activatable
  , EventSubscriber
  , EventPublisher
  , ApiFetchServiceConfiguration
  , ApiFetchServiceDependencies
) as IApiFetchServiceStatic;
