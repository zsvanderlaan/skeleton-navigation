import {EventPublisherBase} from "./eventPublisherBase";
import {Configuration} from "../configuration/Configuration";
import {IEventPublisherConfiguration} from "./iEventPublisherConfiguration";

export class EventPublisherConfiguration extends Configuration<EventPublisherBase> implements IEventPublisherConfiguration {

  constructor() {
    super();
  }
}
