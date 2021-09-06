import { Albuns } from './../../shared/interface/albuns';
import { AlbunsService } from './../../shared/services/albuns.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  constructor(private AlbunsService: AlbunsService) { }
  albunsArray: Albuns[] = [];

  ngOnInit(): void {
    this.listarAlbuns()
  }
  listarAlbuns() {
    this.AlbunsService.getAlbuns().subscribe(
      (album) => {
        this.albunsArray = album;
      }
    )
    
  }

}


