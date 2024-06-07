import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from '../../http.service';
import { IFogotPassword } from '../../../interface/fogotpassword';

@Component({
  selector: 'app-fogotpassword',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './fogotpassword.component.html',
  styleUrl: './fogotpassword.component.css'
})
export class FogotpasswordComponent {
  httpService = inject(HttpService);
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  fotgotPasswordForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });

  validateform: string = '';

  save() {
    if (this. fotgotPasswordForm.value.username == '' && this. fotgotPasswordForm.value.email == '') {
      this.validateform = "Vui lòng nhập đầy đủ thông tin";
    }
    else {
      console.log(this. fotgotPasswordForm.value);
      const datafogot: IFogotPassword = {
        username: this. fotgotPasswordForm.value.username!,
        email: this. fotgotPasswordForm.value.email!
      }
      this.httpService.fogotpassword(datafogot).subscribe(status => {
        if (status != null) {
          this.validateform = "Vui lòng kiểm tra email";
        }
        else {
          this.validateform = "Tên tài khoản hoặc email không đúng";
        }
      });
    }

  }

}
