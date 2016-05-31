import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
import {extend} from "../../coreTools";

export class AutoConfigureConfiguration {
  constructor() { }
}

@autoinject()
export class AutoConfigureDependencies {

  constructor() { }
}

@inject(AutoConfigureDependencies)
export class AutoConfigure {

  constructor(_dependencies: AutoConfigureDependencies, _configuration: AutoConfigureConfiguration) {
    this.autoConfigure(_dependencies, _configuration);
    //if (this._configuration.activateOnConstruction) { this.activate(); }
  }

  protected autoConfigure(_dependencies: AutoConfigureDependencies, _configuration: AutoConfigureConfiguration) {
    this.mapDependencies(_dependencies);
    this.mapConfiguration(_configuration);
    this.mapConfiguration(_configuration);
  }

  protected mapDependencies(_dependencies: AutoConfigureDependencies) {
    extend(this, _dependencies);
  }

  protected mapConfiguration(_configuration: AutoConfigureConfiguration) {
    extend(this, _configuration);
  }
}
