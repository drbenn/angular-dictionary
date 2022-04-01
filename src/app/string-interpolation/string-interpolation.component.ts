import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent implements OnInit {
  nameOfSection: string = 'String Interpolation';
  functionExample: string = 'create and call a method with a tasty function';

  onTastyFunction() {
    // in this case the function only returns the string from const functionExample
    return this.functionExample;
  }

  constructor() {}

  ngOnInit(): void {}
}
