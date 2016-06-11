import {compose} from "../compose";
import {DisposableBase} from "./disposableBase";
import {IDisposableConfiguration} from "./iDisposableConfiguration";
import {IDisposableDependencies} from "./iDisposableDependencies";

export interface IDisposableStatic {
  new(dependencies: IDisposableDependencies, configuration: IDisposableConfiguration): IDisposableBase;
  (dependencies: IDisposableDependencies, configuration: IDisposableConfiguration): void;
}

export interface IDisposableBase extends
  DisposableBase
  , IDisposableDependencies
  , IDisposableConfiguration {
  
}

export let IDisposableBase = compose() as IDisposableStatic;
