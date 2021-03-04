import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  
  usersData:any[] = [];
  trendingTv:any[] =[];
  imgPrefix:any = "https://image.tmdb.org/t/p/w500/";
  
  term:any="";
  constructor(_UsersService:UsersService , private _Router:Router) {

    _UsersService.getTrending('tv').subscribe(

      (data)=>
      {
              this.trendingTv = data.results.slice(0,);
              console.log(data);
      },
      (error)=>
      {
              console.log('Connection Error '+error);
      }
      ,
      ()=>
      {
          console.log("Api 5alst");
      }

)
   }

  ngOnInit(): void {
  }

}
