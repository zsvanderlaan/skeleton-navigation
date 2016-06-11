import {IConfiguration} from "../configuration/iConfiguration";
import {IActivatable} from "./iActivatable";

export interface IActivatableConfiguration extends IConfiguration<IActivatable> {
  isActive: boolean;
  activateAfterComposition: boolean;
}
