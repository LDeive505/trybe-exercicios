export default class Subject {

  constructor(private _name: string) {
    this.name = _name;
  }

  get name(): string { return this._name }

  set name(value: string) { 
    this.nameValidation(value);
    this._name = value 
  }

  nameValidation(value: string): void {
    if (value.length < 3) throw new Error('The name must contain at least 3 characters');
  }
}