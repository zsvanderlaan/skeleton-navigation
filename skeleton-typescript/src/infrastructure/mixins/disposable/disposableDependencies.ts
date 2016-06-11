import {autoinject} from "aurelia-dependency-injection";
import {Dependency} from "../dependency/Dependency";
import {DisposableBase} from "./disposableBase";
import {IDisposableDependencies} from "./iDisposableDependencies";

@autoinject()
export class DisposableDependencies extends Dependency<DisposableBase> implements IDisposableDependencies {

  constructor(
  ) {
    super();
  }
}
