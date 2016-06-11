import {Activatable} from "../../infrastructure/mixins/activatable/activatable";
import {EventSubscriber} from "../../infrastructure/mixins/eventSubscriber/eventSubscriber";
import {EventPublisher} from "../../infrastructure/mixins/eventPublisher/eventPublisher";
import {compose} from "../../infrastructure/mixins/compose";
import {ApiFetchServiceBase} from "./apiFetchServiceBase";
import {IApiFetchServiceDependencies} from "./iApiFetchServiceDependencies";
import {IApiFetchServiceConfiguration} from "./iApiFetchServiceConfiguration";
import {IEventPublisher} from "../../infrastructure/mixins/eventPublisher/iEventPublisher";
import {IEventSubscriber} from "../../infrastructure/mixins/eventSubscriber/iEventSubscriber";
import {IActivatable} from "../../infrastructure/mixins/activatable/iActivatable";

export interface IApiFetchServiceStatic {
  new(dependencies: IApiFetchServiceDependencies, configuration: IApiFetchServiceConfiguration): IApiFetchServiceBase;
  (dependencies: IApiFetchServiceDependencies, configuration: IApiFetchServiceConfiguration): void;
}

export interface IApiFetchServiceBase extends
  ApiFetchServiceBase
  , IApiFetchServiceDependencies
  , IApiFetchServiceConfiguration
  , IActivatable
  , IEventSubscriber
  , IEventPublisher {
  
}

export let IApiFetchServiceBase = compose(
  Activatable
  , EventSubscriber
  , EventPublisher
) as IApiFetchServiceStatic;
