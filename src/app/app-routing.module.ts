import { TodosComponent } from './views/todos/todos.component';
import { AlbunsComponent } from './views/albuns/albuns.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PostagensComponent } from './views/postagens/postagens.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"postagens", component:PostagensComponent},
  {path:"albuns", component:AlbunsComponent},
  {path:"todos", component:TodosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
