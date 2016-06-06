import {ActivatableDependencies} from "./activatableDependencies";
import {ActivatableConfiguration} from "./activatableConfiguration";
import {compose} from "../Compose";

export interface IActivatableBaseStatic {
  new(dependencies: ActivatableDependencies, configuration: ActivatableConfiguration): IActivatableBase;
  (dependencies: ActivatableDependencies, configuration: ActivatableConfiguration): void;
}

export interface IActivatableBase extends ActivatableConfiguration, ActivatableDependencies {

}

export let IActivatableBase = compose(
  ActivatableConfiguration
  , ActivatableDependencies
) as IActivatableBaseStatic;
