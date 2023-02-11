import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageKlantComponent } from './manage-klant/manage-klant.component';
import { ManageLeverancierComponent } from './manage-leverancier/manage-leverancier.component';
import { ManageUserComponent } from './manage-user/manage-user.component';



export const MaterialRoutes: Routes = [
    {
        path:'leverancier',
        component: ManageLeverancierComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin','user']
        }
    },
    {
        path:'klant',
        component: ManageKlantComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin','user']
        }
    },
    {
        path:'user',
        component: ManageUserComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    }
];
