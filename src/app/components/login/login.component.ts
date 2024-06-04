import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from '../../http.service';
import { ILogin } from '../../../interface/login';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  httpService = inject(HttpService);
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  validateform: string = '';

  save() {
    if (this.loginForm.value.username == '' || this.loginForm.value.password == '') {
      this.validateform = "Vui lòng nhập đầy đủ thông tin";
    }
    else {
      console.log(this.loginForm.value);
      const datalogin: ILogin = {
        username: this.loginForm.value.username!,
        password: this.loginForm.value.password!
      }
      this.httpService.login(datalogin).subscribe(status => {
        if (status != null) {
          console.log('login success');
          this.router.navigateByUrl('home');
        }
        else {
          this.validateform = "Tên tài khoản hoặc mật khẩu không đúng";
          console.log('login failed');
        }
      });
    }

  }

  

  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}
