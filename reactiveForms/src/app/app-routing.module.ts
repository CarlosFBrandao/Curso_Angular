import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RactiveFormsComponent } from './ractive-forms/ractive-forms.component';

const routes: Routes = [{
  path: '',
  component:RactiveFormsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
