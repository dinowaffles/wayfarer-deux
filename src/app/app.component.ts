import { Component, OnInit } from '@angular/core';
import { CITIES } from './cities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  title = 'wayfarer';
  cities = CITIES;

  public search: any = '';

  isShown: boolean = false; 

  constructor(public router: Router) {}

  ngOnInit() {


  }

  showResults() {
    this.isShown = ! this.isShown;
  }


}
