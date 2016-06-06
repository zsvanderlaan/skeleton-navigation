import {autoinject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";
import {ObserverLocator} from "aurelia-binding";

@autoinject()
export class EventSubscriberDependencies {

  constructor(
    public eventAggregator: EventAggregator
    , public observerLocator: ObserverLocator
  ) { }
}
