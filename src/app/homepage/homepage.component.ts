import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import { CITIES } from '../cities';
import { HttpClient } from '@angular//common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cities = CITIES;

  cityIndex: string|null = '';
  name: string|null = '';
  city: any;

  postsIndex: string|null = '';
  title: string|null = '';
  posts: any;

  isShown: boolean = false;

  author: string = '';
  date: string = '';
  postcity: string = '';
  posttitle: string = '';
  text: string = '';

  userPosts = [
    {
      // usertitle: 'test',
      // userdate: 'test',
      // userauthor: 'test',
      // usertext: 'test',
    },
  ]

  weather: any;


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cityIndex = params.get('id');
      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      });
    });

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });

    this.route.paramMap.subscribe(params => {
      this.postsIndex = params.get('id');
      this.posts = CITIES.find(posts => {
        let paramId: string = params.get('id') || '';
        return posts.id === parseInt(paramId);
      });

    });

    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
    });

    this.city.posts = this.city.posts.sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // this.locationSubject.subscribe(name => {
      this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city.name}&appid=8935027cdf20f978dce1257d340e6d10&units=imperial`)
      .subscribe((response) => {
        console.log(response);
        this.weather = response;
      });
    // })


  }
  findWeather(city: string): void {
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city.name}&appid=8935027cdf20f978dce1257d340e6d10&units=imperial`)
    .subscribe((response) => {
      console.log(response);
      this.weather = response;
          });
    }


  toggleShow() {
    this.isShown = ! this.isShown;
  }

  postSubmit() {
    this.userPosts.push({usertitle: 'this.title', userdate: 'this.date', userauthor: 'this.author', usertext: 'this.text' })
    console.log(this.userPosts);

  }
}
