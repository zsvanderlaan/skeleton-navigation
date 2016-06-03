import {ViewModel} from './ViewModel';
import {Dropable} from './Dropable';
import {compose} from './Compose';

export interface IDropableViewModelStatic {
    new(): IDropableViewModel
    (): void;
}

export interface IDropableViewModel extends ViewModel, Dropable {

    onDrop()
    onPickup()
}

export let IDropableViewModel = compose(ViewModel, Dropable) as IDropableViewModelStatic;
