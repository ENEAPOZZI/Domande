import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { StartComponent } from './Pages/start/start.component';
import { RisultatiComponent } from './Componets/risultati/risultati.component';
import { StoricoComponent } from './Pages/storico/storico.component';

const routes: Routes = [
  {
    path:'',
    component: StartComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'storico',
    component: StoricoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
