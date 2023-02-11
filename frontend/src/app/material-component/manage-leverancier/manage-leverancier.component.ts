import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LeverancierService } from 'src/app/services/leverancier.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constans';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';
import { LeverancierComponent } from '../dialog/leverancier/leverancier.component';

@Component({
  selector: 'app-manage-leverancier',
  templateUrl: './manage-leverancier.component.html',
  styleUrls: ['./manage-leverancier.component.scss']
})
export class ManageLeverancierComponent {
  displayedColumns:string[] = ['bedrijfsnaam', 'adress', 'directeur','district', 'telefoonnummer', 'website', 'edit'];
  dataSource:any;
  responseMessage:any;

  constructor(private leverancierService: LeverancierService,
    private ngxService:NgxUiLoaderService,
    private dialog:MatDialog,
    private snackbarService:SnackbarService,
    private router:Router){}

    ngOnInit():void{
      this.ngxService.start();
      this.tableData();
    }

    tableData(){
      this.leverancierService.getLeverancier().subscribe((response:any)=>{
        this.ngxService.stop();
        this.dataSource = new MatTableDataSource(response);
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
      const dialogRef = this.dialog.open(LeverancierComponent,dialogConfig);
      this.router.events.subscribe(()=>{
        dialogRef.close();
      })
      const sub = dialogRef.componentInstance.onAddLeverancier.subscribe(
        (response)=>{
          this.tableData();
        }
      )
    }

    handleEditAction(values:any){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        action:'Edit',
        data:values
      }
      dialogConfig.width = "850px";
      const dialogRef = this.dialog.open(LeverancierComponent,dialogConfig);
      this.router.events.subscribe(()=>{
        dialogRef.close();
      })
      const sub = dialogRef.componentInstance.onEditLeverancier.subscribe(
        (response)=>{
          this.tableData();
        }
      )
    }

    handleDeleteAction(values:any){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data={
        message:'delete '+values.bedrijfsnaam+' leverancier'
      };
      const dialogRef = this.dialog.open(ConfirmationComponent,dialogConfig);
      const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response)=>{
        this.ngxService.start();
        this.deleteLeverancier(values.id);
        dialogRef.close();
      })
    }
    deleteLeverancier(id:any){
      this.leverancierService.delete(id).subscribe((response:any)=>{
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
      var data = {
        status: status.toString(),
        id:id
      }
      this.leverancierService.updateStatus(data).subscribe((response:any)=>{
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
