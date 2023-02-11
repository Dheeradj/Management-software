import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { KlantService } from 'src/app/services/klant.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constans';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';
import { KlantComponent } from '../dialog/klant/klant.component';

@Component({
  selector: 'app-manage-klant',
  templateUrl: './manage-klant.component.html',
  styleUrls: ['./manage-klant.component.scss']
})
export class ManageKlantComponent {
  displayedColumns:string[] = ['voornaam','achternaam','geslacht','adressennummer','district','telefoonnummer','email','edit'];
  dataSource:any;
  responseMessage:any;
  constructor(private klantService:KlantService,
    private ngxService:NgxUiLoaderService,
    private dialog:MatDialog,
    private snackbarService:SnackbarService,
    private router:Router){}

  ngOnInit():void {
    this.ngxService.start();
    this.tableData();

  }
  tableData(){
    this.klantService.getKlant().subscribe((response:any)=>{
      console.log(response);
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(response);
    },(error:any)=>{
      this.ngxService.stop();
      console.log(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleAddAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action:'Add'
    }
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(KlantComponent,dialogConfig);
    this.router.events.subscribe(()=>{
      dialogRef.close();
    })
    const sub = dialogRef.componentInstance.onAddKlant.subscribe((response)=>{
      this.tableData();
    })
  }

  handleEditAction(values:any){
    console.log(values);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action:'Edit',
      data:values
    }
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(KlantComponent,dialogConfig);
    this.router.events.subscribe(()=>{
      dialogRef.close();
    })
    const sub = dialogRef.componentInstance.onEditKlant.subscribe((response)=>{
      this.tableData();
    })
  }
  handleDeleteAction(values:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={
      message:'delete '+values.voornaam+' klant'
    };
    const dialogRef = this.dialog.open(ConfirmationComponent,dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response)=>{
      this.ngxService.start();
      this.deleteKlant(values.id);
      dialogRef.close();
    })
  }

  deleteKlant(id:any){
    this.klantService.delete(id).subscribe((response:any)=>{
      this.ngxService.stop();
      this.tableData();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,"success");
    },(error:any)=>{
      this.ngxService.stop();
      console.log(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }

  onChange(status:any,id:any){
    this.ngxService.start();
    var data = {
      status: status.toString(),
      id:id
    }
    this.klantService.updateStatus(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,"success");

    },(error:any)=>{
      this.ngxService.stop();
      console.log(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }
}
