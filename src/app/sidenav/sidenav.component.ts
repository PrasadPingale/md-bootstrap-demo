import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isCollapsed: Boolean = false;
  isStrAdmin: Boolean = false;
  selectedItem: any;
  menuItem: any;

  validMenu: Boolean = false;
  @Output() collapse = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  collapseMenu(collapse: Boolean) {
    this.collapse.emit(!collapse);
    this.isCollapsed = !this.isCollapsed;
  }
}
