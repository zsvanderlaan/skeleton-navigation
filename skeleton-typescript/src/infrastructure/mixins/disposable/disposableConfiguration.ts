import {DisposableBase} from "./disposableBase";
import {Configuration} from "../configuration/Configuration";
import {IDisposableConfiguration} from "./iDisposableConfiguration";

export class DisposableConfiguration extends Configuration<DisposableBase> implements IDisposableConfiguration {

  constructor() {
    super();
  }

}
