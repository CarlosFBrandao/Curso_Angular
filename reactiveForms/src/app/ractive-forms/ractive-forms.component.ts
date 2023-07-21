import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ractive-forms',
  templateUrl: './ractive-forms.component.html',
  styleUrls: ['./ractive-forms.component.scss']
})
export class RactiveFormsComponent implements OnInit {

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(5)]]
  })

  constructor(
    private formBuilder: FormBuilder
  ){

  }

  ngOnInit(): void {
  }

  public submitForm(): void {
    if(this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName);
    }
  }
}
