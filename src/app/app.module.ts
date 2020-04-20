import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService} from './services/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthenticationService],
})
export class AppModule { }
