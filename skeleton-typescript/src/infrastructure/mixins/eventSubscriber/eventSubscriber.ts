import {inject} from "aurelia-dependency-injection";
import {EventSubscriberConfiguration} from "./eventSubscriberConfiguration";
import {EventSubscriberDependencies} from "./eventSubscriberDependencies";
import {IEventSubscriberBase} from "./iEventSubscriberBase";
import {IEventHandlerRegistry} from "./iEventHandlerRegistry";
import {IEventSubscriber} from "./iEventSubscriber";

@inject(EventSubscriberDependencies)
export class EventSubscriber extends IEventSubscriberBase implements IEventSubscriber {
  
  constructor(dependencies: EventSubscriberDependencies, configuration: EventSubscriberConfiguration) {
    super(dependencies, configuration);
  }

  eventHandlers: Array<IEventHandlerRegistry> = [];

  private eventSubscriptions: Array<{dispose(): void}> = [];

  public subscribeEventHandlers() {
    this.eventHandlers.forEach(eventHandlerRegistry => {
      this.eventSubscriptions.push(this.eventAggregator.subscribe(eventHandlerRegistry.eventType, eventHandlerRegistry.eventHandler));
    })
  }

  public unsubscribeEventHandlers() {
    this.eventSubscriptions.forEach((eventSubscription) => { eventSubscription.dispose(); });
  }
  
  onActivate() {
    if (!this.subscribeOnActivation) { return; }
    this.subscribeEventHandlers();
  }

  onDeactivate() {
    if (!this.unsubscribeOnDeactivation) { return; }
    this.unsubscribeEventHandlers();
  }

  dispose() {
    super.dispose();
    this.unsubscribeEventHandlers();
  }
}
