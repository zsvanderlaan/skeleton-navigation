import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
import {autoconfigure} from "./coreTools";

export class ValidationErrorConfiguration {

  constructor(
    public message: string
  ) {

  }
}

@autoinject()
export class ValidationErrorDependencies { }

@autoconfigure()
@inject(ValidationErrorDependencies)
export class ValidationError {

  constructor(
    private _dependencies: ValidationErrorDependencies
    , private _configuration: ValidationErrorConfiguration
  ) {

  }

}
