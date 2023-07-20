import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFoodList } from '../module/ifood-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();
  private url: string = "http://localhost:3000/"


  private list: Array<string> = [
    "Arroz",
    "Feijão",
    "Fubá"
  ];

  private HttpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json' 
      })
  }

  constructor(
    private http: HttpClient
  ) { }

  public getFoodList(): Observable<Array<IFoodList>>{
    return this.http.get<Array<IFoodList>>(`${this.url}list-food`)
    .pipe(
      res => res,
      error => error
      )
  }

  public addFoodList(value: string): Observable<IFoodList>{
    return this.http.post<IFoodList>(`${this.url}list-food`,{nome: value})
      .pipe(res => res,
            error => error)
    
  }

  public foodListEdit(value: string, id: number): Observable<IFoodList>{
    return this.http.put<IFoodList>(`${this.url}list-food/${id}`, {nome: value})
      .pipe(res => res,
            error => error)
  }

  public foodListDelete(id: number): Observable<IFoodList>{
    return this.http.delete<IFoodList>(`${this.url}list-food/${id}`)
      .pipe(res => res,
            error => error)
  }

  public foodListAlert(value: IFoodList){
    return this.emitEvent.emit(value);
  }
}
