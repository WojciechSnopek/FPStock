import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../stock-data.service';
import { StockGatewayService } from '../core/services/stock-gateway.service';

@Component({
  selector: 'app-stock-prices',
  templateUrl: './stock-prices.component.html',
  styleUrls: ['./stock-prices.component.scss'],
  providers: [StockDataService]
})
export class StockPricesComponent implements OnInit {

  constructor(private readonly stockdataService: StockGatewayService) { }

  ngOnInit() {
    this.stockdataService.getStocks$().subscribe(stocks => console.log(stocks));
  }

}
