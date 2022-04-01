import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-practice',
  templateUrl: './databinding-practice.component.html',
  styleUrls: ['./databinding-practice.component.css'],
})
export class DatabindingPracticeComponent implements OnInit {
  usernameField = 'Enter Username';

  constructor() {}

  ngOnInit(): void {}

  clearUsername() {
    this.usernameField = '';
  }
}
