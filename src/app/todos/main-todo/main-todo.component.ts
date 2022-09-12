import { Component, OnInit } from '@angular/core';
import { TodosCommunicateService } from 'src/app/services/todos-communicate.service';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})
export class MainTodoComponent  {

  allTodos:any;

  constructor(private todosService:TodosCommunicateService) {
    this.getTodos()
   }

  getTodos(){
    this.todosService.getTodos().subscribe(data=>{
      this.allTodos = data
    })

  }
}
