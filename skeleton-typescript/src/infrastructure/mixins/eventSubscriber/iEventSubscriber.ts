import {IActivatableImplementer} from "../activatable/iActivatable";
import {IEventHandlerRegistry} from "./iEventHandlerRegistry";

export interface IEventSubscriber extends IActivatableImplementer {
  subscribeEventHandlers();
  unsubscribeEventHandlers();

  eventHandlers: Array<IEventHandlerRegistry>;
}
