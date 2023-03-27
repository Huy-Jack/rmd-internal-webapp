import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RoleBoxComponent } from './transfer-box/role-box/role-box.component';
import { TransferBoxComponent } from './transfer-box/transfer-box.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    NavBarComponent,
    RoleBoxComponent,
    TransferBoxComponent,
    TableComponent,
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
  ],
})
export class CommonComponentModule {}
