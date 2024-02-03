import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
   today!:Date;
  constructor() { }

  ngOnInit(): void {
    this.today = new Date();
  }

}
