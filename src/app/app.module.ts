import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule  } from '@angular/material/slider';
import { MyWalletComponent } from './features/wallet/my-wallet/my-wallet.component';
import { NavComponent } from './shared/component/nav/nav.component';
import { StockPricesComponent, PurchaseDialogComponent } from './features/stocks/stock-prices/stock-prices.component';
import { StockGraphComponent } from './features/stocks/stock-graph/stock-graph.component';
import { MaterialModuleFeatures } from './shared/modules/material-module';
import { EditProfileComponent } from './features/userAccount/edit-profile/edit-profile.component';
import { LoginComponent } from './features/userAccount/login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyWalletComponent,
    NavComponent,
    StockPricesComponent,
    StockGraphComponent,
    EditProfileComponent,
    LoginComponent,
    HomeComponent,
    PurchaseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModuleFeatures,
    HttpClientModule
  ],
  entryComponents: [StockPricesComponent, PurchaseDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
