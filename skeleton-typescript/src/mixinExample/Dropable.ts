export class Dropable {

    constructor() {}

    isDropped = false;

    drop() { this.isDropped = true; }
    pickup() { this.isDropped = false; }
}