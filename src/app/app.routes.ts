import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NewhomeComponent } from './components/newhome/newhome.component';
import { Component } from '@angular/core';

export const routes: Routes = [
   {path:"LoginComponent",component : LoginComponent} ,
   {path: "HomeComponent",component: HomeComponent},
   {path: "RegistrationComponent",component: RegistrationComponent},
   {path: "NewhomeComponent",component: NewhomeComponent} 
];
