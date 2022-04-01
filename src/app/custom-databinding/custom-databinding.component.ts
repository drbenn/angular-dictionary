import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-databinding',
  templateUrl: './custom-databinding.component.html',
  styleUrls: ['./custom-databinding.component.css'],
})
export class CustomDatabindingComponent implements OnInit {
  parentElements = [
    {
      type: 'server',
      name: 'Name of Object Hosted In Parent',
      content: 'Content of Object Hosted In Parent',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
