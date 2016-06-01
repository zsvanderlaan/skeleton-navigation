import {IComposedDropableViewModel, IDropableViewModel} from './IDropableViewModel';

export class DropableViewModel extends IComposedDropableViewModel implements IDropableViewModel {

    constructor( ) { super(); }

    onDrop() { this.activate(); }
    onPickup() { this.deactivate(); }
}