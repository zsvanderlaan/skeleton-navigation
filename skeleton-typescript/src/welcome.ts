//import {computedFrom} from 'aurelia-framework';
import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";
import {TestService} from "./testService/testService";

@autoinject()
export class WelcomeDependencies {

  constructor(
    public _testService: TestService
  ) {
    console.log('test service:', this._testService);
  }
}

@inject(WelcomeDependencies)
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;

  constructor(
    private _dependencies: WelcomeDependencies
  ) {
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
