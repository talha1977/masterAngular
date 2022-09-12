import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodosCommunicateService } from 'src/app/services/todos-communicate.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  inputVal=''
  @Output() refresh = new EventEmitter()
  constructor(private todosService:TodosCommunicateService) { }

  ngOnInit(): void {
  }
  add(){
    this.todosService.postTodo({title:this.inputVal}).subscribe((data)=>{console.log(data)})
    this.inputVal = '';
    this.refresh.emit()

  }

}
