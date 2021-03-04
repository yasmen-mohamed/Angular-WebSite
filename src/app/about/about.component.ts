import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutContainer:any[] = [];
  constructor(_UsersService:UsersService) { 


  this.aboutContainer = _UsersService.users;

  }

  ngOnInit(): void {
  }

}
