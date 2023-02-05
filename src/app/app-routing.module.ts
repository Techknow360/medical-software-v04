import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustbillComponent } from './medicalview/custbill/custbill.component';
import { CustdetailsComponent } from './medicalview/custdetails/custdetails.component';
import { DashboardComponent } from './medicalview/dashboard/dashboard.component';
import { PaymentsComponent } from './medicalview/payments/payments.component';
import { ProductsComponent } from './medicalview/products/products.component';
import { ReportsComponent } from './medicalview/reports/reports.component';
import { SettingsComponent } from './medicalview/settings/settings.component';
import { TrashComponent } from './medicalview/trash/trash.component';
import { UserprofileComponent } from './medicalview/userprofile/userprofile.component';
import { UsersComponent } from './medicalview/users/users.component';
import { VendorsComponent } from './medicalview/vendors/vendors.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'customerdetails',
    component : CustdetailsComponent
  },
  {
    path : 'billing',
    component : CustbillComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'userprofile',
    component : UserprofileComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  },
  {
    path : 'trash',
    component : TrashComponent
  },
  {
    path : 'vendors',
    component : VendorsComponent
  },
  {
    path : 'settings',
    component : SettingsComponent
  },
  {
    path : 'reports',
    component : ReportsComponent
  },
  {
    path : 'payments',
    component : PaymentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
