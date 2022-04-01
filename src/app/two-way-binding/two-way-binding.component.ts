import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  textFieldLine = 'Default text';

  constructor() {}

  ngOnInit(): void {}

  // onCreateNewLine() {
  //   this.newLineCreationStatus = 'new line HAS BEEN CREATED';
  // }

  onUpdateLine(event: any) {
    // event by itself will only log individual keystrokes
    // console.log(event);

    // TS casting is required thus the < >
    // This targets the full value of the text field with data entry
    this.textFieldLine = (<HTMLInputElement>event.target).value;
  }
}
