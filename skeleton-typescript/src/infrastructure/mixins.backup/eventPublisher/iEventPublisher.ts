export interface IEventPublisher {
  publishEvent(eventType: Function, eventConfiguration): void;
}
