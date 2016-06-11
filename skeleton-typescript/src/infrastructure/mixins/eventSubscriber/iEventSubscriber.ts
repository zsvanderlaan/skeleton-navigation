import {IActivatableImplementation} from "../activatable/iActivatable";
import {IEventHandlerRegistry} from "./iEventHandlerRegistry";

export interface IEventSubscriber extends IActivatableImplementation {
  subscribeEventHandlers();
  unsubscribeEventHandlers();

  eventHandlers: Array<IEventHandlerRegistry>;
}
