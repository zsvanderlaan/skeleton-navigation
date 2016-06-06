export interface IEventHandlerRegistry {
  eventType: Function | string;
  eventHandler: Function;
}
