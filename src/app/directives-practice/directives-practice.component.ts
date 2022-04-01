import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.css'],
})
export class DirectivesPracticeComponent implements OnInit {
  showSecret = false;
  showSecretTimeStamp = false;
  toggleStatus = false;
  log = [];
  logTimeStamp = [];

  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    this.showSecret = !this.showSecret;
    this.toggleStatus === true
      ? (this.toggleStatus = false)
      : (this.toggleStatus = true);
    this.log.push(this.log.length + 1);
  }

  onButtonClickTimeStamp() {
    this.showSecretTimeStamp = !this.showSecretTimeStamp;
    this.logTimeStamp.push(new Date());
  }
}
