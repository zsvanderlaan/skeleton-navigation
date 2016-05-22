//import {computedFrom} from 'aurelia-framework';
import {autoinject} from "aurelia-dependency-injection";

import {EventAggregator} from "aurelia-event-aggregator";
//import {ApiRequestEventFactory} from "./apiRequestEventFactory";
import {GetRolesFetchService} from "./getRolesFetchService";
import {ApiRequestEvent, ApiRequestEventConfiguration} from "./apiRequestEvent";
import {Roles} from "./roles";
import {ApiResponseValidationSuccessEvent} from "./apiResponseValidationSuccessEvent";
import {ApiResponseValidationErrorEvent} from "./apiResponseValidationErrorEvent";
import {inject} from "aurelia-dependency-injection";
import {Factory} from "aurelia-dependency-injection";
import {TestService} from "./testService/testService";


//@inject(GetRolesFetchService, EventAggregator, Factory.of(ApiRequestEvent))
@autoinject()
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;


  constructor(
    private _getRolesFetchService: GetRolesFetchService
    , private _eventAggregator: EventAggregator
    , private _apiRequestEventFactory: Factory
    , private _testService: TestService
  ) {
    this._eventAggregator.subscribe(ApiResponseValidationSuccessEvent, (event) => { console.log('validation success'); })
    this._eventAggregator.subscribe(ApiResponseValidationErrorEvent, (event) => { console.log('validation error'); })

    

    let configuration = new ApiRequestEventConfiguration(Roles);
    //let event = this._apiRequestEventFactory(configuration);
    //this._eventAggregator.publish(event);
  }
  
  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}


// Why do I get different results between the following:
/*
 * // Dependency Injection Tests
 *
 * @inject(Factory.of(ApiRequestEvent))
 * export class Foo {
 *   constructor(private _apiRequestEventFactory) { } // yields anonymous function
 * }
 *
 * @inject([Factory.of(ApiRequestEvent)])
 * export class Foo {
 *   constructor(private _apiRequestEventFactory) { } // yeilds Array[Factory]
 * }
 *
 *
 * @autoinject()
 * export class Foo {
 *   constructor(private _apiRequestEventFactory: Factory) { } // yields an uninitialized Factory
 * }
 *
 *
 * @autoinject()
 * export class Foo {
 *   constructor(private _apiRequestEventFactory: Function) { } // yields an uninitialized anonymous function
 * }
 *
 */
