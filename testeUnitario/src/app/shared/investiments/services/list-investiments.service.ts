import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInvestimentos } from '../model/IInvestimentos';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListInvestimentsService {

  private url: string = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json";

  constructor(
    private httpClient: HttpClient
  ) {

   }

   public list(): Observable<Array<IInvestimentos>> {
     return this.httpClient.get<Array<IInvestimentos>>(this.url).pipe(
      map(
        res => res
      )
     )
    }
}
