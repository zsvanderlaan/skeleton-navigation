import {inject} from "aurelia-dependency-injection";
import {ActivatableConfiguration} from "./activatableConfiguration";
import {ActivatableDependencies} from "./activatableDependencies";
import {IActivatable, IActivatableImplementer, isActivatableImplementer} from "./iActivatable";
import {IActivatableBase} from "./iActivatableBase";

@inject(ActivatableDependencies)
export class Activatable extends IActivatableBase implements IActivatable {

  constructor(dependencies: ActivatableDependencies, configuration: ActivatableConfiguration) {
    super(dependencies, configuration);
    this.observerLocator.getObserver(this, 'isActive').subscribe(this.isActiveChanged);
  }

  public activate() {
    this.isActive = true;
  }

  public deactivate() {
    this.isActive = false;
  }
  
  protected isActiveChanged(newValue: boolean, oldValue: boolean) {
    let self = this as Activatable | IActivatableImplementer;
    if (isActivatableImplementer(self)) {

      if (true === newValue) {
        self.onActivate();
      }
      else {
        self.onDeactivate();
      }
    }
  }
}
