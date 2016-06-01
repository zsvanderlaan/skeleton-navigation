export class Activatable {

    constructor() {}

    isActive = false;

    activate() { this.isActive = true; }
    deactivate() { this.isActive = false; }
}