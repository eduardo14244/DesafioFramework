import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  constructor(
    private http:HttpClient
  ) { }

getAlbuns():Observable<any>{
  return this.http.get(`https://jsonplaceholder.typicode.com/albums`) 
}
}

