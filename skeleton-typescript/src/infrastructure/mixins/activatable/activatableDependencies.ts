import {autoinject} from "aurelia-dependency-injection";
import {ObserverLocator} from "aurelia-binding";
import {Dependency} from "../dependency/Dependency";
import {ActivatableBase} from "./activatableBase";
import {IActivatableDependencies} from "./iActivatableDependencies";

@autoinject()
export class ActivatableDependencies extends Dependency<ActivatableBase> implements IActivatableDependencies {

  constructor(
    public observerLocator: ObserverLocator
  ) {
    super();
  }
}
