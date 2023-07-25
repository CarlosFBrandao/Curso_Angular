import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {

  constructor(
    private router: Router
  ){};  
  
  canLoad(
    route: Route,
    segments: UrlSegment[]):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (segments[1]?.path ==='leads'){
        return true;
      }
      alert('O módulo não foi carregado!');
      this.router.navigate(['/']);
      return false;
  }
}
