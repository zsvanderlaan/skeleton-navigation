import {IComposable} from "../composable/iComposable";
import {IConfiguration} from "../configuration/iConfiguration";

export interface IDependency<T extends IComposable<IDependency<T>, IConfiguration<T>>> { }
