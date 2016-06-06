import {inject} from "aurelia-dependency-injection";
import {EventPublisherConfiguration} from "./eventPublisherConfiguration";
import {EventPublisherDependencies} from "./eventPublisherDependencies";
import {IEventPublisherBase} from "./iEventPublisherBase";
import {IEventPublisher} from "./iEventPublisher";

@inject(EventPublisherDependencies)
export class EventPublisher extends IEventPublisherBase implements IEventPublisher {

  constructor(dependencies: EventPublisherDependencies, configuration: EventPublisherConfiguration) {
    super(dependencies, configuration);
  }
  
  publishEvent(eventType: Function, eventConfiguration): void {
    let event = this.dynamicFactoryResolver.get(eventType, eventConfiguration);
    this.eventAggregator.publish(event);
  }
}
