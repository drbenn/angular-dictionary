import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-dictionary';
  chapters = [
    '<app-string-interpolation></app-string-interpolation>',
    '<app-property-binding></app-property-binding>',
    '<app-event-binding></app-event-binding>',
    '<app-two-way-binding></app-two-way-binding>',
    '<app-databinding-practice></app-databinding-practice>',
  ];
}
