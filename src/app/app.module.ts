import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PptComponent } from './ppt/ppt.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFavoriteColorComponent } from './reactive-favorite-color/reactive-favorite-color.component';

import {ProductsService} from "./products.service";
import { ServicesComponent } from './services/services.component';
import { InstaComponent } from './insta/insta.component';

const routes : Routes = [ 

  {path:"home",component:HomeComponent},
  {path:"ppt",component:PptComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"color",component:ReactiveFavoriteColorComponent},
  {path:"service",component:ServicesComponent},
  {path:"insta",component:InstaComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PptComponent,
    LoginComponent,
    ProfileComponent,
    ReactiveFavoriteColorComponent,
    ServicesComponent,
    InstaComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ProductsService], //means service is installed
  bootstrap: [AppComponent]
})
export class AppModule { }
