import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeverancierService } from 'src/app/services/leverancier.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Inject } from '@angular/core';
import { GlobalConstants } from 'src/app/shared/global-constans';

@Component({
  selector: 'app-leverancier',
  templateUrl: './leverancier.component.html',
  styleUrls: ['./leverancier.component.scss']
})
export class LeverancierComponent{
  onAddLeverancier = new EventEmitter();
  onEditLeverancier = new EventEmitter();
  leverancierForm:any = FormGroup;
  dialogAction:any="Add";
  action:any = "Add";
  responseMessage:any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
  private formBuilder:FormBuilder,
  private leverancierService:LeverancierService,
  public dialogRef: MatDialogRef<LeverancierComponent>,
  private snackbarService:SnackbarService){}

  ngOnInit(): void{
    this.leverancierForm = this.formBuilder.group({
      bedrijfsnaam:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      adress:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      district:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      directeur:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      telefoonnummer:[null,[Validators.required,Validators.pattern(GlobalConstants.contactNumberRegex)]],
      website:[null,[Validators.required,Validators.pattern(GlobalConstants.websiteRegex)]],

    })

    if(this.dialogData.action === 'Edit'){
      this.dialogAction = "Edit";
      this.action = "Update";
      this.leverancierForm.patchValue(this.dialogData.data);

    }

  }

  handleSubmit(){
    if(this.dialogAction === 'Edit'){
      this.edit();
    }else{
      this.add();
    }

  }

  
  add(){
    var formData = this.leverancierForm.value;
    var data = {
      bedrijfsnaam:formData.bedrijfsnaam,
      adress:formData.adress,
      district:formData.district,
      directeur:formData.directeur,
      telefoonnummer:formData.telefoonnummer,
      website:formData.website

    }
    this.leverancierService.add(data).subscribe((response:any)=>{
      this.dialogRef.close();
      this.onAddLeverancier.emit();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage,"success")
    },(error:any)=>{
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }

  edit(){
    var formData = this.leverancierForm.value;
    var data = {
      id: this.dialogData.data.id,
      bedrijfsnaam:formData.bedrijfsnaam,
      adress:formData.adress,
      district:formData.district,
      directeur:formData.directeur,
      telefoonnummer:formData.telefoonnummer,
      website:formData.website

    }
    this.leverancierService.update(data).subscribe((response:any)=>{
      this.dialogRef.close();
      this.onEditLeverancier.emit();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage,"success")
    },(error:any)=>{
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
    
  }
}
