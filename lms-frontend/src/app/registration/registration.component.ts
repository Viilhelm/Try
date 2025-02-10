import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../_model/users';
import { UsersService } from '../_service/users.service';
//import { RegistrationService } from '../_service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: Users = new Users();
  isAdminMode: boolean = false;
  constructor(private usersService: UsersService,
    private router: Router) { }
    //constructor(
      //private registrationService: RegistrationService,
      //private router: Router
    //) { }

  ngOnInit(): void {
  }

  saveUser() {
    if (!this.isAdminMode) {
      // 如果是前台自注册，自动设置默认角色为 "User"
      if (!this.user.role || this.user.role.length === 0) {
        this.user.role = [{ roleName: 'User' }];
      }
    }
    this.usersService.createUser(this.user).subscribe(
    //his.registrationService.registerUser(this.user).subscribe(
      data => {
      console.log(data);
      //this.goToUsersList();
      if (this.isAdminMode) {
        // 管理员模式下添加用户后，跳转到管理员用户列表页面
        this.router.navigate(['/users']);
      } else {
        // 前台自注册后，跳转到登录页面（或其他页面）
        this.router.navigate(['/login']);
      }
    },
    error => console.log(error));
  }

  //goToUsersList() {
    //this.router.navigate(['/users']);
  //}

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

}
