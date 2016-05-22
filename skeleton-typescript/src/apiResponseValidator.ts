import {ValidationResult, ValidationResultConfiguration} from "./validationResult";
import {ValidationError, ValidationErrorConfiguration} from "./validationError";
import {mapImplementsContract, autoconfigure} from "./coreTools";
import {inject} from "aurelia-dependency-injection";
import {Factory} from "aurelia-dependency-injection";

export class ApiResponseValidatorConfiguration { }

@inject(
  Factory.of(ValidationResult)
  , Factory.of(ValidationError)
)
export class ApiResponseValidatorDependencies {

  constructor(
    public _validationResultFactory: (configuration: ValidationResultConfiguration) => ValidationResult
    , public _validationErrorFactory: (configuration: ValidationErrorConfiguration) => ValidationError
  ) { }
}

@autoconfigure()
@inject(ApiResponseValidatorDependencies)
export class ApiResponseValidator {

  constructor(
    private _dependencies: ApiResponseValidatorDependencies
    , private _configuration: ApiResponseValidatorConfiguration
  ) { }

  public validate(dataType: Function | string, data: any): ValidationResult {

    if (typeof dataType === 'string') { return this.validateString(data); }
    else { return this.validateClass(dataType as Function, data as Map<string, any>) }
  }

  protected validateString(data: string): ValidationResult {

    let isValid: boolean = false;

    let validationErrors: Array<ValidationError> = [];
    let errorMessage = 'Validation on api response data of type string has not been implemented.';
    let validationError = this._dependencies._validationErrorFactory(new ValidationErrorConfiguration(errorMessage));
    validationErrors.push(validationError);

    return this._dependencies._validationResultFactory(new ValidationResultConfiguration(isValid, validationErrors, data));
  }

  protected validateClass(dataType: Function, data: Map<string, any>): ValidationResult {

    let interfaceToValidate: Map<string, any> = new (<any>dataType);
    let validationErrors: Array<ValidationError> = [];
    
    let isValid: boolean = mapImplementsContract(data, interfaceToValidate);
    
    if (!isValid) {
      let errorMessage = "The api response data does not implement the indicated data type.";
      let validationError = this._dependencies._validationErrorFactory(new ValidationErrorConfiguration(errorMessage));
      validationErrors.push(validationError);
    }

    return this._dependencies._validationResultFactory(new ValidationResultConfiguration(isValid, validationErrors, data));
  }
}
