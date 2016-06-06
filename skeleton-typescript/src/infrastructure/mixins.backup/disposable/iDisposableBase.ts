import {DisposableDependencies} from "./disposableDependencies";
import {DisposableConfiguration} from "./disposableConfiguration";
import {compose} from "../Compose";

export interface IDisposableStatic {
  new(dependencies: DisposableDependencies, configuration: DisposableConfiguration): IDisposableBase;
  (dependencies: DisposableDependencies, configuration: DisposableConfiguration): void;
}

export interface IDisposableBase extends DisposableConfiguration, DisposableDependencies {
  
}

export let IDisposableBase = compose(DisposableConfiguration, DisposableDependencies) as IDisposableStatic;
