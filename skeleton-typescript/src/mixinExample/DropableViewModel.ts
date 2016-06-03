import {IDropableViewModel} from './IDropableViewModel';

export class DropableViewModel extends IDropableViewModel implements IDropableViewModel {

    constructor( ) { super(); }

    onDrop() { this.activate(); }
    onPickup() { this.deactivate(); }
}
