import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/list/list.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): poupanca tem o valor de 10', () => {
    expect(component.getPoupanca).toEqual(50);
  })

  it('(U) getCarteira(): carteira tem o valor de 50', () => {
    expect(component.getCarteira).toEqual(50);
  });

  it('(U) teste de transferencia da poupança para carteira', () => {
    component.setSacar('10');
    fixture.detectChanges();
    expect(component.getPoupanca).toEqual(40);
    expect(component.getCarteira).toEqual(60);
  });

  it('(U) teste de transferencia da carteira para poupança', () => {
    component.setDepositar('10');
    fixture.detectChanges();
    expect(component.getPoupanca).toEqual(60);
    expect(component.getCarteira).toEqual(40);
  });

  it(`(U) setSacar() teste de transferencia da poupança
    para carteira quando o valor do saque é maior que o saldo disponível ou caso o valor solicitado não
    seja um número válido.`, () => {

    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('60')).not.toBeTruthy();

    expect(component.getCarteira).toEqual(50);
    expect(component.getPoupanca).toEqual(50);
  });

  it(`(U) setDepositar() teste de transferencia da carteira
    para poupança quando o valor do deposito é maior que o disponível ou caso o valor solicitado não
    seja um número válido.`, () => {

    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('60')).not.toBeTruthy();

    expect(component.getCarteira).toEqual(50);
    expect(component.getPoupanca).toEqual(50);
  });

  it(`(I) setSacar() teste de transferencia da poupança
    para carteira quando o valor do saque é maior que o saldo disponível ou caso o valor solicitado não
    seja um número válido.`, () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#inputSacar').value = "10";
    el.querySelector('#btnSacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#saldoPoupanca').textContent).toEqual('40');
    expect(el.querySelector('#saldoCarteira').textContent).toEqual('60');

  });

  it(`(I) setDepositar() teste de transferencia da carteira
    para poupanca quando o valor do saque é maior que o saldo disponível ou caso o valor solicitado não
    seja um número válido.`, () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#inputDepositar').value = "10";
    el.querySelector('#btnDepositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#saldoPoupanca').textContent).toEqual('60');
    expect(el.querySelector('#saldoCarteira').textContent).toEqual('40');

  });

});
