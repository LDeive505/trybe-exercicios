class Student {

  private _registration: string;
  private _name: string;
  private _testResults: Array<number>= [];
  private _groupAtvResults: Array<number> = [];

  constructor(name: string,  registration: string) {
    this._name = name;
    this._registration = registration;
  }

  // Getters
  get registration(): string { return this._registration };
  get name(): string { return this._name };
  get testResults(): Array<number> { return this._testResults };
  get groupAtvResults(): Array<number> { return this._groupAtvResults };

  // Setters
  set registration(registration: string) { this._registration = registration };
  set name(name: string) { this._name = name };
  set testResults(testResults: Array<number>) { this._testResults = testResults };
  set groupAtvResults(groupAtvResults: Array<number>) { this._groupAtvResults = groupAtvResults };

  testResultsSum(): number {
    return this._testResults.reduce((total, value) => total + value, 0);
  }
  
  testResultsAverage(): number {
    return this.testResultsSum() / this._testResults.length;
  }
  
}