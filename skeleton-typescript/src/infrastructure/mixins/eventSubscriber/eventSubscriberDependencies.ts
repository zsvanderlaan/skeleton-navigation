import {autoinject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";
import {ObserverLocator} from "aurelia-binding";
import {IEventSubscriberDependencies} from "./iEventSubscriberDependencies";
import {Dependency} from "../dependency/Dependency";
import {EventSubscriber} from "./eventSubscriber";

@autoinject()
export class EventSubscriberDependencies extends Dependency<EventSubscriber> implements IEventSubscriberDependencies {

  constructor(
    public eventAggregator: EventAggregator
    , public observerLocator: ObserverLocator
  ) {
    super();
  }
}
