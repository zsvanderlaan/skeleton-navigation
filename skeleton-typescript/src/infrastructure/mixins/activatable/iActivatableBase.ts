import {ActivatableBase} from "./activatableBase";
import {getImplementationBase} from "../ImplementationFactory";
import {IActivatableConfiguration} from "./iActivatableConfiguration";
import {IActivatableDependencies} from "./iActivatableDependencies";

export interface IActivatableBaseStatic {
  new(dependencies: IActivatableDependencies, configuration: IActivatableConfiguration): IActivatableBase;
  (dependencies: IActivatableDependencies, configuration: IActivatableConfiguration): void;
}

export interface IActivatableBase extends
  ActivatableBase
  , IActivatableDependencies
  , IActivatableConfiguration {

}

export let IActivatableBase = getImplementationBase<ActivatableBase>() as IActivatableBaseStatic;
