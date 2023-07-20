import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFoodList } from 'src/app/module/ifood-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<IFoodList>= [];

  constructor(
    private foodListService : FoodListService
    ) {
     }

  ngOnInit(): void {    
    this.foodListService.getFoodList().subscribe(
      res => this.foodList = res,
      error => error
    );
    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`O item ${res.nome} foi adicionado`);
        return this.foodList.push(res);
      }
      //res => alert(`Um item foi adicionado: ${res}`) //Deprecisado
    );
  }
  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe(
      res => {this.foodListService.getFoodList().subscribe(
                res => this.foodList = res,
                error => error);
            },
      error => error)
  }

  public foodListEdit(value: string, id: number){
    return this.foodListService.foodListEdit(value, id).subscribe(
          res => res,
          error => error);
  }
}
