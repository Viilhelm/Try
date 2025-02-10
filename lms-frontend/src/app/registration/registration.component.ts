import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../_model/users';
import { RegistrationService } from '../_service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: Users = new Users();

  constructor(
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("Register page loaded (GET request).");
  }

  saveUser() {
    console.log("Registering user:", this.user);
    this.registrationService.registerUser(this.user).subscribe({
      next: data => {
        console.log("User registered successfully:", data);
        alert("User registered successfully!");
        this.router.navigate(['/login']); // 跳转到登录页面或其他页面
      },
      error: err => {
        console.error("Error registering user:", err);
        alert("Registration failed!");
      }
    });
  }

  onSubmit() {
    this.saveUser(); // 点击按钮时触发 POST 请求
  }
}
