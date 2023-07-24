import { Component, OnInit } from '@angular/core';
import { IInvestimentos } from '../model/IInvestimentos';
import { ListInvestimentsService } from '../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  [x: string]: any;

  public investiments!: Array<IInvestimentos>;

  constructor(
    private listInvestimentsService: ListInvestimentsService
  ) { }

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe(
      (res) => (this.investiments = res));
  }

}
