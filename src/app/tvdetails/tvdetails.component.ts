import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent implements OnInit {

  tvId:any;
  tvDetails:any;
  imgPrefix:string ='https://image.tmdb.org/t/p/w500/';
  constructor(private _ActivatedRoute:ActivatedRoute ,private _UsersService:UsersService) { 

   this.tvId = _ActivatedRoute.snapshot.params.id;
   this._UsersService.getTvDetails(this.tvId).subscribe((data)=>{

    this.tvDetails = data;
   })
  }

  ngOnInit(): void {
  }

}
