import { Component, OnInit } from '@angular/core';
import { StockGatewayService } from './core/services/stock-gateway.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StockGatewayService]
})
export class AppComponent implements OnInit {
  stockInfo: {name: string, code: string, unit: number, price: number}[] = [];
  users$: Observable<any> = this.http.get('/api/users');

  constructor(private stockGatewayService: StockGatewayService,
              private http: HttpClient) {}

  ngOnInit() {
      this.stockGatewayService.getStocks$();
    }
}
