import {EventSubscriberDependencies} from "./eventSubscriberDependencies";
import {EventSubscriberConfiguration} from "./eventSubscriberConfiguration";
import {Disposable} from "../disposable/disposable";
import {Activatable} from "../activatable/activatable";
import {compose} from "../Compose";


export interface IEventSubscriberStatic {
  new(dependencies: EventSubscriberDependencies, configuration: EventSubscriberConfiguration): IEventSubscriberBase;
  (dependencies: EventSubscriberDependencies, configuration: EventSubscriberConfiguration): void;
}


export interface IEventSubscriberBase extends
  Activatable
  , Disposable
  , EventSubscriberConfiguration
  , EventSubscriberDependencies { }


export let IEventSubscriberBase = compose(
  Activatable
  , Disposable
  , EventSubscriberConfiguration
  , EventSubscriberDependencies

) as IEventSubscriberStatic;
