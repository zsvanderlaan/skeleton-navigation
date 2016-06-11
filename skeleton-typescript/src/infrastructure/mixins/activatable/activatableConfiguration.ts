import {ActivatableBase} from "./activatableBase";
import {Configuration} from "../configuration/Configuration";
import {IActivatableConfiguration} from "./iActivatableConfiguration";

export class ActivatableConfiguration extends Configuration<ActivatableBase> implements IActivatableConfiguration {
  
  public isActive = false;
  public activateAfterComposition = true;

  constructor() {
    super();
  }
}
