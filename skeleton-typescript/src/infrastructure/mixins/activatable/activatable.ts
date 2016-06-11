import {inject} from "aurelia-dependency-injection";
import {ActivatableConfiguration} from "./activatableConfiguration";
import {ActivatableDependencies} from "./activatableDependencies";
import {IActivatable, IActivatableImplementation, isActivatableImplementation} from "./iActivatable";
import {IActivatableBase} from "./iActivatableBase";

@inject(ActivatableDependencies)
export class Activatable extends IActivatableBase implements IActivatable {

  isActivatableImplementation: boolean = false;

  constructor(dependencies: ActivatableDependencies, configuration: ActivatableConfiguration) {
    super(dependencies, configuration);
    this.isActivatableImplementation = isActivatableImplementation((this as Activatable | IActivatableImplementation));
    this.observerLocator.getObserver(this, 'isActive').subscribe(this.isActiveChanged);
  }

  public activate() {
    this.isActive = true;
  }

  public deactivate() {
    this.isActive = false;
  }
  
  protected isActiveChanged(newValue: boolean, oldValue: boolean) {

    if (this.isActivatableImplementation) {
      if (true === newValue) {
        (this as any).onActivate();
      }
      else {
        (this as any).onDeactivate();
      }
    }
  }
}

export function isActivatable<T>(instanceOfUnknownType: T | Activatable): instanceOfUnknownType is Activatable {
  return (
    ((<Activatable>instanceOfUnknownType).activateAfterComposition !== undefined)
    && ((<Activatable>instanceOfUnknownType).activate !== undefined)
  );
}
