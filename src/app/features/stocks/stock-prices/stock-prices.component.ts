import { Component, OnInit } from '@angular/core';
import { StockGatewayService } from '../../../core/services/stock-gateway.service';
import { Stock } from 'src/app/core/entities/stock.entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-prices',
  templateUrl: './stock-prices.component.html',
  styleUrls: ['./stock-prices.component.scss'],
  providers: [StockGatewayService]
})
export class StockPricesComponent implements OnInit {
  public stocks$: Observable<Array<Stock>>;
  displayedColumns: string[] = ['company', 'unit', 'value', 'actions'];

  constructor(private readonly stockdataService: StockGatewayService) {
    this.getStockData();
   }

  ngOnInit() {
  }

  private getStockData() {
    this.stocks$ = this.stockdataService.getStocks$();
  }

}
