import {ValidationError} from "./validationError";
import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";
import {autoconfigure} from "./coreTools";

export class ValidationResultConfiguration {

  constructor(
    public isValid: boolean
    , public validationErrors: Array<ValidationError>
    , public data: any
  ) { }
}

@autoinject()
export class ValidationResultDependencies { }

@autoconfigure()
@inject(ValidationResultDependencies)
export class ValidationResult {

  constructor(
    private _dependencies: ValidationResultDependencies
    , private _configuration: ValidationResultConfiguration
  ) { }
}
