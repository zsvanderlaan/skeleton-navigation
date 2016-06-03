import {IViewModel} from './IViewModel';

export class ViewModel extends IViewModel implements IViewModel {

    constructor() { super(); }

    onActivate() { this.show(); }
    onDeactivate() { this.hide(); }
}
