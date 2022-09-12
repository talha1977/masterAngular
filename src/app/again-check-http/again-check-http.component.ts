import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

export interface User {
  id: number;
  name: string;
  grade?: number;
  gpa: number;
  completed?: boolean;
}

@Component({
  selector: 'app-again-check-http',
  templateUrl: './again-check-http.component.html',
  styleUrls: ['./again-check-http.component.css'],
})
export class AgainCheckHttpComponent {
  constructor(private us: UsersService) {
    this.logicalPatch(10);
  }

  getUsers(): void {
    this.us.getUsers().subscribe(
      (data) => {
        console.log(data);
      },
      this.us.errorHandleUsers,
      this.us.completed
    );
  }
  getUser(id: number): void {
    this.us.getSpecifiedUser(id).subscribe(
      (data) => {
        console.log(data);
      },
      this.us.errorHandleUsers,
      this.us.completed
    );
  }
  postUser(user: User): void {
    this.us.postUser(user).subscribe(
      (data) => {
        console.log(data);
      },
      this.us.errorHandleUsers,
      this.us.completed
    );
  }
  // deleteUser
  deleteUser(id: number): void {
    this.us.deleteUser(id).subscribe(
      (data) => {
        console.log(data);
      },
      this.us.errorHandleUsers,
      this.us.completed
    );
  }
  // updateUser
  updateUser(data: User): void {
    this.us.updateUser(data).subscribe(
      (data) => {
        console.log(data);
      },
      this.us.errorHandleUsers,
      this.us.completed
    );
  }
  // patchUser
  patchUser(user: User): void {
    this.us
      .patchUser(user)
      .subscribe(
        (data) => console.log(data),
        this.us.errorHandleUsers,
        this.us.completed
      );
  }
  // logicalPatch
  logicalPatch(id: number) {
    this.us.getSpecifiedUser(id).subscribe((data) => {
      console.log(data);
      data.name = 'talha';
      data.gpa = 3.6;
      data.completed = false;
      this.us.updateUser(data);
    });
  }
}
