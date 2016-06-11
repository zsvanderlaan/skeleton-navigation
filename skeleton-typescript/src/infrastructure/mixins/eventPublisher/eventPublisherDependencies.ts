import {autoinject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";
import {DynamicFactoryResolver} from "../../dependencyInjection/dynamicFactoryResolver/dynamicFactoryResolver";
import {Dependency} from "../dependency/Dependency";
import {EventPublisherBase} from "./eventPublisherBase";
import {IEventPublisherDependencies} from "./iEventPublisherDependencies";

@autoinject()
export class EventPublisherDependencies extends Dependency<EventPublisherBase> implements IEventPublisherDependencies {

  constructor(
    public eventAggregator: EventAggregator
    , public dynamicFactoryResolver: DynamicFactoryResolver
  ) {
    super();
  }
}
