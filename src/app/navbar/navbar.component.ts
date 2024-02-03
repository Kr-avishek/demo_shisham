import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDropdown:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isDropdown = !this.isDropdown;
  }

}
