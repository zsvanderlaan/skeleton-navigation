import {autoinject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";
import {DynamicFactoryResolver} from "../../dependencyInjection/dynamicFactoryResolver/dynamicFactoryResolver";

@autoinject()
export class EventPublisherDependencies {

  constructor(
    public eventAggregator: EventAggregator
    , public dynamicFactoryResolver: DynamicFactoryResolver
  ) { }
}
