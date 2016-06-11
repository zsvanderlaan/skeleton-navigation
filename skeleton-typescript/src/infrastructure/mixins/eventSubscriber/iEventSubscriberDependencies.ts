import {IDependency} from "../dependency/iDependency";
import {IEventSubscriber} from "./iEventSubscriber";
import {EventAggregator} from "aurelia-event-aggregator";
import {ObserverLocator} from "aurelia-binding";
import {IActivatableDependencies} from "../activatable/iActivatableDependencies";
import {IDisposableDependencies} from "../disposable/iDisposableDependencies";

export interface IEventSubscriberDependencies extends IDependency<IEventSubscriber>, IActivatableDependencies, IDisposableDependencies {
  eventAggregator: EventAggregator
  observerLocator: ObserverLocator
}
