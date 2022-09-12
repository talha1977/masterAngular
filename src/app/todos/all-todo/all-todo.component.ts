import { Component, Input, OnInit } from '@angular/core';
import { TodosCommunicateService } from 'src/app/services/todos-communicate.service';



@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.css']
})
export class AllTodoComponent {
  @Input() allTodos: any = [];

  constructor(){

  }

}
