import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from '../app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { RoleBoxComponent } from './transfer-box/role-box/role-box.component';
import { TransferBoxComponent } from './transfer-box/transfer-box.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { SizePipe } from './pipes/size.pipe';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    NavBarComponent,
    RoleBoxComponent,
    TransferBoxComponent,
    TableComponent,
    LoadingIndicatorComponent,
    SizePipe,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
  ],
  exports: [
    NavBarComponent,
    RoleBoxComponent,
    TransferBoxComponent,
    TableComponent,
    LoadingIndicatorComponent,
    SizePipe,
    AlertComponent,
  ],
})
export class CommonComponentModule {}
