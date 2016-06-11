import {ActivatableBase} from "./activatableBase";
import {IActivatableConfiguration} from "./iActivatableConfiguration";
import {IActivatableDependencies} from "./iActivatableDependencies";
import {compose} from "../compose";

export interface IActivatableBaseStatic {
  new(dependencies: IActivatableDependencies, configuration: IActivatableConfiguration): IActivatableBase;
  (dependencies: IActivatableDependencies, configuration: IActivatableConfiguration): void;
}

export interface IActivatableBase extends
  ActivatableBase
  , IActivatableDependencies
  , IActivatableConfiguration {

}

export let IActivatableBase = compose() as IActivatableBaseStatic;
