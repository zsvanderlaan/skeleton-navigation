import {ValidationError} from "./validationError";
import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";

export class ValidationResultConfiguration {

  constructor(
    public isValid: boolean
    , public validationErrors: Array<ValidationError>
    , public data: any
  ) { }
}

@autoinject()
export class ValidationResultDependencies { }

@inject(ValidationResultDependencies)
export class ValidationResult {

  constructor(
    private _dependencies: ValidationResultDependencies
    , private _configuration: ValidationResultConfiguration
  ) { }

  public isValid() {
    return this._configuration.isValid;
  }

  // part of autoconfigure should be to attach configuration value retrieval methods
  // using a conventions based approach which can take in a custom configuration
  // will need to examine if class implements its own getConfigurationValue method
  public getValidatedData() {
    return this._configuration.data;
  }

  public getValidationErrors() {
    return this._configuration.validationErrors;
  }
}
