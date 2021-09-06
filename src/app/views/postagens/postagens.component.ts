import { PostagensService } from './../../shared/services/postagens.service';
import { Component, OnInit } from '@angular/core';
import { Postagens } from 'src/app/shared/interface/postagens';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {
  postagensArray: Postagens[] = [];

  constructor(private PostagemService: PostagensService) { }

  ngOnInit(): void {
    this.listarPostagens()
  }
  listarPostagens() {
    this.PostagemService.getPostagens().subscribe(
      (postagem) => {
        this.postagensArray = postagem;
      }
    )
    
  }

}
