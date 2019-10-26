import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule  } from '@angular/material/slider';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { NavComponent } from './nav/nav.component';
import { StockPricesComponent } from './stock-prices/stock-prices.component';
import { StockGraphComponent } from './stock-graph/stock-graph.component';
import { MaterialModuleFeatures } from './material-module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MyWalletComponent,
    NavComponent,
    StockPricesComponent,
    StockGraphComponent,
    EditProfileComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModuleFeatures
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
