import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
import {compose} from "../../coreTools";

export class ActivatableConfiguration {

  public isActive = false;
  public activateOnConstruction = true;

  constructor() { }
}

@autoinject()
export class ActivatableDependencies {

  constructor() { }
}

export interface IActivatable extends
  ActivatableConfiguration
  , ActivatableDependencies
{
  new(_dependencies: ActivatableDependencies, _configuration: ActivatableConfiguration): IActivatable;
  (_dependencies: ActivatableDependencies, _configuration: ActivatableConfiguration): void;
}

export let IActivatable = compose(
  ActivatableConfiguration
  , ActivatableDependencies
) as IActivatable;

@inject(ActivatableDependencies)
export class Activatable extends IActivatable {

  constructor(_dependencies: ActivatableDependencies, _configuration: ActivatableConfiguration) {
    super(_dependencies, _configuration);
    if (this.activateOnConstruction) { this.activate(); }
  }

  public activate() {
    this.isActive = true;
  }

  public deactivate() {
    this.isActive = false;
  }
}
