import {ActivatableDependencies} from "./activatableDependencies";
import {ActivatableConfiguration} from "./activatableConfiguration";
import {compose} from "../Compose";
import {IComposable} from "../composable/iComposable";

export interface IActivatableBaseStatic extends IComposable<ActivatableDependencies, ActivatableConfiguration> {
  new(dependencies: ActivatableDependencies, configuration: ActivatableConfiguration): IActivatableBase;
  (dependencies: ActivatableDependencies, configuration: ActivatableConfiguration): void;
}

export interface IActivatableBase extends ActivatableDependencies, ActivatableConfiguration {

}

export let IActivatableBase = compose<IActivatableBaseStatic>(
  ActivatableConfiguration
  , ActivatableDependencies
) as IActivatableBaseStatic;
