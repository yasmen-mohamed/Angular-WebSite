import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) {

  }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
  }
  getMovieDetails(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`);

  }
  getTvDetails(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`);

  }

  welcome()
  {
    window.alert("Welcome");
  }

  users = 
  [
      {name:'abdoooo' , age:27 , gender:'male' , dateOfBirth:'1/1/2001'},
      {name:'mai' , age:27 , gender:'female' , dateOfBirth:'2/3/2001'},
      {name:'hambozo' , age:29 , gender:'male' , dateOfBirth:'5/6/2001'},
      {name:'ibrahim' , age:19 , gender:'male' , dateOfBirth:'1/1/2001'},
      {name:'aya' , age:17 , gender:'female' , dateOfBirth:'1/1/2001'},

  ]


}
