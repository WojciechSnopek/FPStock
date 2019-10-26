import { Component, OnInit } from '@angular/core';
import { StockDataService } from './stock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StockDataService]
})
export class AppComponent implements OnInit {
  stockInfo: {name: string, code: string, unit: number, price: number}[] = [];

  constructor(private stockdataService: StockDataService) {}

  ngOnInit() {
    this.stockInfo = this.stockdataService.stockInfo;
  }
}
