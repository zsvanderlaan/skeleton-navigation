import {IDependency} from "../dependency/iDependency";
import {IComposable} from "../composable/iComposable";
import {IConfiguration} from "../configuration/iConfiguration";

export class Dependency<T extends IComposable<IDependency<T>, IConfiguration<T>>>
  implements IDependency<T>
{
  constructor() {

  }
}
