import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KlantService } from 'src/app/services/klant.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constans';

@Component({
  selector: 'app-klant',
  templateUrl: './klant.component.html',
  styleUrls: ['./klant.component.scss']
})
export class KlantComponent implements OnInit{
  onAddKlant = new EventEmitter();
  onEditKlant = new EventEmitter();
  klantForm:any = FormGroup;
  dialogAction:any ="Add";
  action:any = "Add";
  responseMessage:any;

  constructor(@Inject(MAT_DIALOG_DATA)public dialogData:any,
  private formBuilder: FormBuilder,
  private klantService: KlantService,
  public dialogRef: MatDialogRef<KlantComponent>,
  private snackbarService: SnackbarService){}

  ngOnInit(): void {
    this.klantForm = this.formBuilder.group({
      voornaam:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      achternaam:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      geslacht:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      adressennummer:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      district:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      telefoonnummer:[null,[Validators.required,Validators.pattern(GlobalConstants.contactNumberRegex)]],
      email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]]
    })
    if(this.dialogData.action === 'Edit'){
      this.dialogAction = "Edit";
      this.action = "Edit";
      this.klantForm.patchValue(this.dialogData.data);
    }
  }

  handleSubmit(){
    if(this.dialogAction === "Edit"){
      this.edit();
    }else{
      this.add();
    }
  }
  

  add(){
    var formData = this.klantForm.value;
    var data = {
      voornaam:formData.voornaam,
      achternaam:formData.achternaam,
      geslacht:formData.geslacht,
      adressennummer:formData.adressennummer,
      district:formData.district,
      telefoonnummer:formData.telefoonnummer,
      email:formData.email
    }
    this.klantService.add(data).subscribe((response:any)=>{
      this.dialogRef.close();
      this.onAddKlant.emit();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage,"Success");
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
    var formData = this.klantForm.value;
    var data = {
      id:this.dialogData.data.id,
      voornaam:formData.voornaam,
      achternaam:formData.achternaam,
      geslacht:formData.geslacht,
      adressennummer:formData.adressennummer,
      district:formData.district,
      telefoonnummer:formData.telefoonnummer,
      email:formData.email
    }
    this.klantService.update(data).subscribe((response:any)=>{
      this.dialogRef.close();
      this.onEditKlant.emit();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage,"Success");
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
