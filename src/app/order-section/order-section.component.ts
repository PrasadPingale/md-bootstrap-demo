import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-section',
  templateUrl: './order-section.component.html',
  styleUrls: ['./order-section.component.scss'],
})
export class OrderSectionComponent implements OnInit {
  showPayments: Boolean = true;
  model = {
    year: 2018,
    month: 11,
    day: 8,
  };
  model1 = {
    year: 2018,
    month: 11,
    day: 8,
  };
  constructor() {}

  ngOnInit() {}
}
