export class Hideable {

    constructor() {}

    isHidden = false;

    hide() { this.isHidden = true; }
    show() { this.isHidden = false; }
}