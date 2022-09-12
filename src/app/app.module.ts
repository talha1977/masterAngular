import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';
// import { InputSaadaComponent } from './input-saada/input-saada.component';
import { HttpClientModule } from '@angular/common/http';
// import { MainTodoComponent } from './todos/main-todo/main-todo.component';
// import { TodoInputComponent } from './todos/todo-input/todo-input.component';
// import { AllTodoComponent } from './todos/all-todo/all-todo.component';
import { AgainCheckHttpComponent } from './again-check-http/again-check-http.component';
import { UsersService } from './services/users.service';
import { LoginComponent } from './auth-practicec/components/login/login.component';
import { ForgetPasswordComponent } from './auth-practicec/components/forget-password/forget-password.component';
import { NotFoundComponent } from './auth-practicec/components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponentComponent } from './auth-practicec/modules/components/home-component/home-component.component';
import { ServicesComponent } from './auth-practicec/modules/components/services/services.component';
import { ContactComponent } from './auth-practicec/modules/components/contact/contact.component';
import { NavbarComponent } from './auth-practicec/modules/components/navbar/navbar.component';
import { FooterComponent } from './auth-practicec/modules/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // ContactFormComponent,
    // InputSaadaComponent,
    // MainTodoComponent,
    // TodoInputComponent,
    // AllTodoComponent,
    AgainCheckHttpComponent,
    LoginComponent,
    ForgetPasswordComponent,
    NotFoundComponent,
    MainComponent,
    HomeComponentComponent,
    ServicesComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
