import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(
    private foodListService: FoodListService
  ) { }

  ngOnInit(): void {
  }

  public addFoodList(value: string):void{
    this.foodListService.addFoodList(value).subscribe(
      res =>this.foodListService.foodListAlert(res),
      error => error)
  }

}
