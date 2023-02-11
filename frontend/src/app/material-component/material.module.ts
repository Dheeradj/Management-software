import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../shared/material-module';
import { ViewBillProductsComponent } from './dialog/view-bill-products/view-bill-products.component';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';
import { ManageLeverancierComponent } from './manage-leverancier/manage-leverancier.component';
import { ManageKlantComponent } from './manage-klant/manage-klant.component';
import { LeverancierComponent } from './dialog/leverancier/leverancier.component';
import { KlantComponent } from './dialog/klant/klant.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
    ViewBillProductsComponent,
    ConfirmationComponent,
    ChangePasswordComponent,
    ManageLeverancierComponent,
    ManageKlantComponent,
    LeverancierComponent,
    KlantComponent,
    ManageUserComponent    
  ]
})
export class MaterialComponentsModule {}
