import {IDependency} from "../dependency/iDependency";
import {IEventPublisher} from "./iEventPublisher";
import {DynamicFactoryResolver} from "../../dependencyInjection/dynamicFactoryResolver/dynamicFactoryResolver";
import {EventAggregator} from "aurelia-event-aggregator";

export interface IEventPublisherDependencies extends IDependency<IEventPublisher> {
  eventAggregator: EventAggregator;
  dynamicFactoryResolver: DynamicFactoryResolver;
}
