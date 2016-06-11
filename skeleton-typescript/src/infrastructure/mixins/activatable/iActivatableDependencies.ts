import {ObserverLocator} from "aurelia-binding";
import {IDependency} from "../dependency/iDependency";
import {IActivatable} from "./iActivatable";

export interface IActivatableDependencies extends IDependency<IActivatable> {
  observerLocator: ObserverLocator;
}
