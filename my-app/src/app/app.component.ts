import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  fullImagePath: string;

  constructor() {
    this.fullImagePath = './assets/images/dsz.jpg'
  }

  ngOnInit() {
  }
  
}
