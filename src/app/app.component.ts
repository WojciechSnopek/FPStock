import { Component, OnInit } from '@angular/core';
import { StockGatewayService } from './core/services/stock-gateway.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StockGatewayService]
})
export class AppComponent implements OnInit {
  stockInfo: {name: string, code: string, unit: number, price: number}[] = [];

  constructor(private stockGatewayService: StockGatewayService) {}

  ngOnInit() {
      this.stockGatewayService.getStocks$();
    }
}
