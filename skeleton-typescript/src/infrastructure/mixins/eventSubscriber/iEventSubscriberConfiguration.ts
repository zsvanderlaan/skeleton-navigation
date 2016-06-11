import {IEventSubscriber} from "./iEventSubscriber";
import {IConfiguration} from "../configuration/iConfiguration";
import {IActivatableConfiguration} from "../activatable/iActivatableConfiguration";
import {IDisposableConfiguration} from "../disposable/iDisposableConfiguration";

export interface IEventSubscriberConfiguration extends IConfiguration<IEventSubscriber>, IActivatableConfiguration, IDisposableConfiguration {

  subscribeOnActivation: boolean;
  unsubscribeOnDeactivation: boolean;
}
