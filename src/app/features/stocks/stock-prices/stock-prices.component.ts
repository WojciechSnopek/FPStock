import { Component, OnInit, Inject } from '@angular/core';
import { StockGatewayService } from '../../../core/services/stock-gateway.service';
import { Stock } from 'src/app/core/entities/stock.entity';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-dialog',
  templateUrl: '/purchase-dialog.component.html',
  providers: [StockGatewayService]
})
export class PurchaseDialogComponent {
  public stocks$: Observable<Array<Stock>>;
  constructor(
    private readonly stockdataService: StockGatewayService,
    public dialogRef: MatDialogRef<PurchaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.getStockData();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private getStockData() {
    this.stocks$ = this.stockdataService.getStocks$();
  }
}


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

  openDialog(): void {
    const dialogRef = this.dialog.open(PurchaseDialogComponent, {
      width: '300px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('The transaction was canceled!');
      this.name = result;
    });

}
}
