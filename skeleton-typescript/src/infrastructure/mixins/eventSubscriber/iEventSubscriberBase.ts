import {Disposable} from "../disposable/disposable";
import {Activatable} from "../activatable/activatable";
import {IEventSubscriberDependencies} from "./iEventSubscriberDependencies";
import {IActivatable} from "../activatable/iActivatable";
import {IDisposable} from "../disposable/iDisposable";
import {getImplementationComposition} from "../ImplementationFactory";
import {IEventSubscriberConfiguration} from "./iEventSubscriberConfiguration";
import {EventSubscriberBase} from "./eventSubscriberBase";


export interface IEventSubscriberStatic {
  new(dependencies: IEventSubscriberDependencies, configuration: IEventSubscriberConfiguration): IEventSubscriberBase;
  (dependencies: IEventSubscriberDependencies, configuration: IEventSubscriberConfiguration): void;
}


export interface IEventSubscriberBase extends
  EventSubscriberBase
  , IEventSubscriberDependencies
  , IEventSubscriberConfiguration
  , IActivatable
  , IDisposable {
}


export let IEventSubscriberBase = getImplementationComposition(
  Activatable
  , Disposable
) as IEventSubscriberStatic;
