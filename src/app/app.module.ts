import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './views/home/home.component';
import { PostagensComponent } from './views/postagens/postagens.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbunsComponent } from './views/albuns/albuns.component';
import { TodosComponent } from './views/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PostagensComponent,
    AlbunsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
