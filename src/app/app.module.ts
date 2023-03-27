import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentModule } from './common/common-component.module';
import { HomeComponent } from './home/home.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductManagementComponent, PaymentComponent, OrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    CommonComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
