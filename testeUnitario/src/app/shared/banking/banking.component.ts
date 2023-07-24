import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit{
  private poupanca: number = 50;
  private carteira: number = 50;

  constructor(){}
  
  ngOnInit(): void {
  }

  get getPoupanca(): number {
    return this.poupanca;
  }
  get getCarteira(): number {
    return this.carteira;
  }

  public setSacar(value: string): number | undefined {
    const sacar = Number(value);
    if (isNaN(sacar)) {
      return;
    }
    else if(this.poupanca < sacar){
      window.alert(`saldo insuficiente`);
      return;
    }
    this.poupanca -= sacar;
    return this.carteira += sacar;
  }

  public setDepositar(value: string): number | undefined {
    const depositar = Number(value);
    if (isNaN(depositar)) {
      return;
    }    
    else if(this.carteira < depositar){
      window.alert(`saldo insuficiente`);
      return;
    }
    this.poupanca += depositar;
    return this.carteira -= depositar;
  }

}
