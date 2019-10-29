import { Component, Inject } from '@angular/core';
import { StockGatewayService } from '../../../core/services/stock-gateway.service';
import { Stock } from 'src/app/core/entities/stock.entity';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-dialog',
  templateUrl: './purchase-dialog.component.html',
  styleUrls: ['./purchase-dialog.component.scss'],
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
