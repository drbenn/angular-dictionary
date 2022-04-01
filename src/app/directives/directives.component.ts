import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  isButtonPushed = false;
  isButtonPushedB = false;
  fiftyFifty: string = '50/50';
  ngForArray = ['Test line 1', 'Test line 2'];
  ngForArrayLastItem: string = 'hello';
  newLineCount: number = 0;

  // Part C
  constructor() {
    this.fiftyFifty = Math.random() > 0.5 ? 'lower' : 'higher';
  }

  ngOnInit(): void {}

  // Part A
  onButtonPush() {
    this.isButtonPushed = true;
  }
  // Part B
  onButtonPushB() {
    this.isButtonPushedB = true;
  }
  // Part C
  getColor() {
    return this.fiftyFifty === 'lower' ? 'dodgerblue' : 'yellow';
  }

  // Part E
  ngForCreateNewLine() {
    this.newLineCount += 1;
    this.ngForArray.push('new line ' + this.newLineCount);
    console.log(`ngFor Array:` + this.ngForArray);
    this.ngForArrayLastItem = this.ngForArray[-1];
    console.log(`ngForArrayLastItem: ` + this.ngForArrayLastItem);
  }
}
