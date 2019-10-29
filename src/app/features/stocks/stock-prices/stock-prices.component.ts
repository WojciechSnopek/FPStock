import { Component, OnInit } from '@angular/core';
import { StockGatewayService } from '../../../core/services/stock-gateway.service';
import { Stock } from 'src/app/core/entities/stock.entity';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseDialogComponent } from './purchase-dialog.component';
import { Data } from 'src/app/core/entities/data.entity';

@Component({
  selector: 'app-stock-prices',
  templateUrl: './stock-prices.component.html',
  styleUrls: ['./stock-prices.component.scss'],
  providers: [StockGatewayService]
})
export class StockPricesComponent implements OnInit {
  public stocks$: Subject<Array<Stock>>;
  displayedColumns: string[] = ['company', 'unit', 'value', 'actions'];
  // animal: string;
  name: string;

  constructor(public dialog: MatDialog, private readonly stockdataService: StockGatewayService) {
    this.getStockData();
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
  }

  private getStockData() {
    // this.stocks$ = this.stockdataService.getStocks$();
  }

  openDialog(stock: Stock): void {
    console.log(stock);
    const dialogRef = this.dialog.open(PurchaseDialogComponent, {
      width: '300px',
      disableClose: true,
      data: {name: this.name,
        stock: stock
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('The transaction was canceled!');
      this.name = result;
    });

}
}
