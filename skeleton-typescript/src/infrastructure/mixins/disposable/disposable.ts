import {inject} from "aurelia-dependency-injection";
import {DisposableConfiguration} from "./disposableConfiguration";
import {DisposableDependencies} from "./disposableDependencies";
import {IDisposableBase} from "./iDisposableBase";
import {IDisposable} from "./iDisposable";

@inject(DisposableDependencies)
export class Disposable extends IDisposableBase implements IDisposable {

  constructor(dependencies: DisposableDependencies, configuration: DisposableConfiguration) {
    super(dependencies, configuration);
  }

  disposables: Array<{ dispose(): void }> = [];

  dispose() {
    this.disposables.forEach((disposable) => { disposable.dispose(); });
  }
}
