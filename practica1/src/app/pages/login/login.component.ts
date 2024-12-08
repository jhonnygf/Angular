import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { DetailComponent } from '../detail/detail.component';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  email = '';
  password = '';
  emailVerdadero = 'admin@gmail.com';
  passwordVerdadero = 'admin';

  constructor(private router: Router, private appComponent: AppComponent) { }

  onSubmit() {
    console.log(this.email);
    if (!this.email || !this.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "email vacio",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }
    if (!this.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password vacio",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(this.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    if (this.email === this.emailVerdadero && this.password === this.passwordVerdadero) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login Success",
        footer: '<a href="#">Why do I have this issue?</a>'
      }).then(() => {
        this.router.navigate(['/about']);
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email or Password",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }
}