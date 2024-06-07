import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../http.service';
import { IChangePassword } from '../../../interface/changepassword';

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {
  httpService = inject(HttpService);
  formBuilder = inject(FormBuilder);
  changePasswordForm = this.formBuilder.group({
    currentpassword: ['', [Validators.required]],
    newpassword: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]],
  });
  validateform: string = '';
  userid = localStorage.getItem('userid')!;

  save() {
    if (this. changePasswordForm.value.currentpassword == '' || this. changePasswordForm.value.newpassword == '' || this. changePasswordForm.value.confirmpassword == '') {
      this.validateform = "Vui lòng nhập đầy đủ thông tin";
    }
    else {
      const datachange: IChangePassword = {
        currentpassword: this. changePasswordForm.value.currentpassword!,
        newpassword: this. changePasswordForm.value.newpassword!,
        confirmpassword: this. changePasswordForm.value.confirmpassword!
      }
      this.httpService.getuserbyid(this.userid).subscribe(response =>{
        if(response.passWord != datachange.currentpassword){
          this.validateform = "Mật khẩu hiện tại không đúng"; 
        }
        else{
          if(datachange.newpassword != datachange.confirmpassword){
            this.validateform = "Mật khẩu mới không trùng khớp";
          }
          else{
            this.httpService.changepassword(this.userid,datachange).subscribe(status => {
              if (status != null) {
                this.validateform = "Đổi mật khẩu thành công";
              }
              else {
                this.validateform = "Đổi mật khẩu không thành công";
              }
            });

          }
        }
      })
      
            
    }
  }

}
