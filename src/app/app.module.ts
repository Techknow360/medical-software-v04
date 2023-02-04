import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { UsersComponent } from './medicalview/users/users.component';
import { ProductsComponent } from './medicalview/products/products.component';
import { VendorsComponent } from './medicalview/vendors/vendors.component';
import { SettingsComponent } from './medicalview/settings/settings.component';
import { CustdetailsComponent } from './medicalview/custdetails/custdetails.component';
import { BilldetailsComponent } from './medicalview/billdetails/billdetails.component';
import { CustbillComponent } from './medicalview/custbill/custbill.component';
import { TrashComponent } from './medicalview/trash/trash.component';
import { ReportsComponent } from './medicalview/reports/reports.component';
import { UserprofileComponent } from './medicalview/userprofile/userprofile.component';
import { DashboardComponent } from './medicalview/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    SpinnerComponent,
    UsersComponent,
    ProductsComponent,
    VendorsComponent,
    SettingsComponent,
    CustdetailsComponent,
    BilldetailsComponent,
    CustbillComponent,
    TrashComponent,
    ReportsComponent,
    UserprofileComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
