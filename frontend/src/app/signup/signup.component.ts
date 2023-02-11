import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { GlobalConstants } from '../shared/global-constans';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm:any = FormGroup;
  responseMessage:any;


  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService,
    private snackbarServices: SnackbarService,
    private dialogRef:MatDialogRef<SignupComponent>,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      naam:[null,[Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      telefoonnummer:[null,[Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      email:[null,[Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password:[null,[Validators.required]]

    })
  }

  handleSubmit(){
    this.ngxService.start();
    var formData = this.signupForm.value;
    var data = {
      naam: formData.naam,
      telefoonnummer: formData.telefoonnummer,
      email: formData.email,      
      password: formData.password


    }
    this.userService.signup(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage = response?.message;
      this.snackbarServices.openSnackBar(this.responseMessage,"");
      this.router.navigate(['/']);
    },(error) =>{
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarServices.openSnackBar(this.responseMessage, GlobalConstants.error);

    })
  }


}
