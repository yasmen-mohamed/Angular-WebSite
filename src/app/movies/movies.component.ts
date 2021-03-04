import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie:any;
  usersData:any[] = [];
  trendingMovies:any[] =[];
  imgPrefix:any = "https://image.tmdb.org/t/p/w500/";
  channel:any;
  term:any="";
  constructor(_UsersService:UsersService , private _Router:Router) {

    this.channel = _UsersService.getTrending('movie').subscribe(
      (data)=>
      {
        this.trendingMovies = data.results.slice(0,);
        console.log(data);
      },
      (error)=>
      {
        console.log('Connection Error '+error);
      },
      ()=>
      {
          console.log("Api 5alst");
      })
   }

  ngOnInit(): void {
  }

}
