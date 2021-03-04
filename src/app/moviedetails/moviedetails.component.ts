import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movieId:any;
  movieDetials:any;
  imgPrefix:string ='https://image.tmdb.org/t/p/w500/';

  constructor( private _ActivatedRoute:ActivatedRoute , private _UsersService:UsersService) { 

    this.movieId = _ActivatedRoute.snapshot.params.x;

    this._UsersService.getMovieDetails(this.movieId).subscribe((data)=>{


        this.movieDetials  = data;

    })
  }

  ngOnInit(): void {
  }

}
