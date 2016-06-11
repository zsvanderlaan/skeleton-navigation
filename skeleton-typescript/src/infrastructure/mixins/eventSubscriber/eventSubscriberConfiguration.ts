import {EventSubscriber} from "./eventSubscriber";
import {Configuration} from "../configuration/Configuration";
import {IEventSubscriberConfiguration} from "./iEventSubscriberConfiguration";

export class EventSubscriberConfiguration extends Configuration<EventSubscriber> implements IEventSubscriberConfiguration {

  subscribeOnActivation = true;
  unsubscribeOnDeactivation = true;
  isActive = false;
  activateAfterComposition = true;
  
  constructor() {
    super();
  }
}
