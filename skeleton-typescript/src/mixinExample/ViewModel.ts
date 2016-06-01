import {IComposedViewModel, IViewModel} from './IViewModel';

export class ViewModel extends IComposedViewModel implements IViewModel {

    constructor() { super(); }

    onActivate() { this.show(); }
    onDeactivate() { this.hide(); }
}