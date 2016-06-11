import {getImplementationBase} from "../ImplementationFactory";
import {EventPublisherBase} from "./eventPublisherBase";
import {IEventPublisherDependencies} from "./iEventPublisherDependencies";
import {IEventPublisherConfiguration} from "./iEventPublisherConfiguration";

export interface IEventPublisherStatic {
  new(dependencies: IEventPublisherDependencies, configuration: IEventPublisherConfiguration): IEventPublisherBase;
  (dependencies: IEventPublisherDependencies, configuration: IEventPublisherConfiguration): void;
}

export interface IEventPublisherBase extends
  EventPublisherBase
  , IEventPublisherDependencies
  , IEventPublisherConfiguration {

}

export let IEventPublisherBase = getImplementationBase<EventPublisherBase>() as IEventPublisherStatic;
