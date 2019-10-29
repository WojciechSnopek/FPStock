import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from '../entities/stock.entity';

@Injectable({
  providedIn: 'root'
})
export class StockGatewayService {

  private stocks: Array<Stock>;

  constructor() {
    // this.stocks = [
    //   {
    //     name: 'Future processing',
    //     code: 'Fp',
    //     unit: 1,
    //     price: 4.9561
    //   },
    //   {
    //     name: 'Fp Lab',
    //     code: 'FpL',
    //     unit: 100,
    //     price: 3.7175
    //   },
    //   {
    //     name: 'progress Bar',
    //     code: 'pGB',
    //     unit: 1,
    //     price: 4.3817
    //   },
    //   {
    //     name: 'Fp coin',
    //     code: 'Fpc',
    //     unit: 50,
    //     price: 17.4561
    //   },
    //   {
    //     name: 'Fp Adventure',
    //     code: 'FpA',
    //     unit: 50,
    //     price: 12.4321
    //   },
    //   {
    //     name: 'Deadline 24',
    //     code: 'DL24',
    //     unit: 100,
    //     price: 5.2345
    //   }
    // ];
   }

  getStocks$(): Observable<Array<Stock>> {
    return of(this.stocks);
  }
}
