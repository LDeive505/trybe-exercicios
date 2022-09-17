export default interface Employee {
  _registration: string;
  _salary: number;
  _admissionDate: Date;

  generateRegistration(): string;
};

class commonEmployee implements Employee {

  constructor(public _registration: string, public _salary: number, public _admissionDate: Date) {}

  get registration(): string { return this._registration; }
  get salary(): number { return this._salary; }
  get admissionDate(): Date { return this._admissionDate; }

  generateRegistration(): string {
      return Math.floor(Math.random() * 10000000000).toString();
  }
}