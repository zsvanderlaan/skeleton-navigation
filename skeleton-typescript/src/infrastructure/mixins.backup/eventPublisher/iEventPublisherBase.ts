import {EventPublisherDependencies} from "./eventPublisherDependencies";
import {EventPublisherConfiguration} from "./eventPublisherConfiguration";
import {compose} from "../Compose";

export interface IEventPublisherStatic {
  new(dependencies: EventPublisherDependencies, configuration: EventPublisherConfiguration): IEventPublisherBase;
  (dependencies: EventPublisherDependencies, configuration: EventPublisherConfiguration): void;
}

export interface IEventPublisherBase extends EventPublisherConfiguration, EventPublisherDependencies {
  
}

export let IEventPublisherBase = compose(EventPublisherConfiguration, EventPublisherDependencies) as IEventPublisherStatic;
