import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      router.navigate(['admin']);
    }
  }
  submit() {
    this.router.navigate(['admin']);
    this.authService.login(this.form.value).subscribe(
      (data) => {},
      (e) => {
        alert(e);
      }
    );
  }

  ngOnInit(): void {}
}
