import { Component, OnInit } from '@angular/core';
import { StockGatewayService } from '../../../core/services/stock-gateway.service';
import { Stock } from 'src/app/core/entities/stock.entity';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseDialogComponent } from './purchase-dialog.component';

@Component({
  selector: 'app-stock-prices',
  templateUrl: './stock-prices.component.html',
  styleUrls: ['./stock-prices.component.scss'],
  providers: [StockGatewayService]
})
export class StockPricesComponent implements OnInit {
  public stocks$: Observable<Array<Stock>>;
  displayedColumns: string[] = ['company', 'unit', 'value', 'actions'];
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private readonly stockdataService: StockGatewayService) {
    this.getStockData();
   }

  ngOnInit() {
  }

  private getStockData() {
    this.stocks$ = this.stockdataService.getStocks$();
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
