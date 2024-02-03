import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDropdownModalOpen = false;

  openDropdownModal() {
    this.isDropdownModalOpen = true;
  }

  closeDropdownModal() {
    this.isDropdownModalOpen = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
