import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  newLineCreationStatus = 'No new line was created';
  editThisLine = 'Change the Text here';

  constructor() {}

  ngOnInit(): void {}

  onCreateNewLine() {
    this.newLineCreationStatus = 'new line HAS BEEN CREATED';
  }

  onUpdateLine(event: any) {
    // event by itself will only log individual keystrokes
    // console.log(event);

    // TS casting is required thus the < >
    // This targets the full value of the text field with data entry
    this.editThisLine = (<HTMLInputElement>event.target).value;
  }
}
