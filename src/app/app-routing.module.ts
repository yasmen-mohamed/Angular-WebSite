import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'contacts', canActivate: [AuthGuard], component: ContactsComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'tv', canActivate: [AuthGuard], component: TvComponent },
  {path:'moviedetails/:x', canActivate: [AuthGuard] , component:MoviedetailsComponent},
  {path:'tvdetails/:id', canActivate: [AuthGuard] , component:TvdetailsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'learning',
  //   loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule)
  // },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true }) ],





  exports: [RouterModule]
})
export class AppRoutingModule { }
