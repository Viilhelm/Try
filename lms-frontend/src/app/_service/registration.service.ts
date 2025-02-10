import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../_model/users';
// 如果你使用环境变量，可以导入 environment
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // 使用相对路径，由代理将请求转发到后端
  private baseURL = "/register";

  // 如果后端需要不带认证的请求头，可以设置如下（非必须）
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private http: HttpClient) { }

  // 定义调用后端注册接口的方法
  registerUser(user: Users): Observable<Object> {
    return this.http.post(this.baseURL, user, { headers: this.requestHeader });
  }
}
