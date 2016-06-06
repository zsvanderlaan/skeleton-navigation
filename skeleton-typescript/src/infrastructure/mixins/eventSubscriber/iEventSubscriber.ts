import {IActivatableImplementer} from "../activatable/iActivatable";

export interface IEventSubscriber extends IActivatableImplementer {
  subscribeEventHandlers();
  unsubscribeEventHandlers();
}
