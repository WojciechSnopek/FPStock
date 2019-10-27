import { Component, OnInit } from '@angular/core';
import { StockGatewayService } from 'src/app/core/services/stock-gateway.service';
import { Stock } from 'src/app/core/entities/stock.entity';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss'],
  providers: [StockGatewayService]
})
export class MyWalletComponent implements OnInit {
public stocks$: Observable<Array<Stock>>;
displayedColumns: string[] = ['company', 'value', 'unit', 'totalcost', 'actions'];

  constructor(private readonly stockDataService: StockGatewayService) {
    this.getStockData();
  }

  ngOnInit() {
  }

  private getStockData() {
      this.stocks$ = this.stockDataService.getStocks$();
  }
}
