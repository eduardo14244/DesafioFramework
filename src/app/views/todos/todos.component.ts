import { TodosService } from './../../shared/services/todos.service';
import { Todos } from './../../shared/interface/todos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todosArray: Todos[]=[]

  constructor(private TodosService: TodosService) { }

  ngOnInit(): void {
    this.listarTodos()
  }
  listarTodos(){
    this.TodosService.getTodos().subscribe(
      (todos) => {
        this.todosArray = todos;
      }
    )
  }

}
