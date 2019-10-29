import { Component, OnInit } from '@angular/core';
import { StockGatewayService } from 'src/app/core/services/stock-gateway.service';
import { Stock } from 'src/app/core/entities/stock.entity';
import { Observable, Subject, } from 'rxjs';
import { Data } from 'src/app/core/entities/data.entity';



@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss'],
  providers: [StockGatewayService]
})
export class MyWalletComponent implements OnInit {
public stocks$: Subject<Array<Stock>>;
displayedColumns: string[] = ['company', 'value', 'unit', 'totalcost', 'actions'];

  constructor(private readonly stockDataService: StockGatewayService) {
    // this.getStockData();
    this.stocks$ = new Subject<Array<Stock>>();
  }

  ngOnInit() {
    const webSocket = new WebSocket('ws://webtask.future-processing.com:8068/ws/stocks');
    webSocket.onmessage = (event) => {
      const data: Data = JSON.parse(event.data);
      console.log(data);
      console.log(data.Items);
      this.stocks$.next(data.Items);
  };

  // private getStockData() {
  //   // this.stocks$ = this.stockdataService.getStocks$();
  // }

}
}
