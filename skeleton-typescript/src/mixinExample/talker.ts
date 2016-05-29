export class TalkerConfiguration {
  sound: string = 'coin';
}

export class TalkerDependencies {

  constructor() {

  }
}

export class Talker {

  constructor(
    protected _dependencies: TalkerDependencies
    , protected _configuration: TalkerConfiguration
  ) {
    
  }

  public hasTalked:boolean = false;

  protected talk() {
      this.hasTalked = true;
      console.log(this._configuration.sound);
  }
}
