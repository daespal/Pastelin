import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../services/data-db.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    correo: new FormControl(''),
    confircorreo: new FormControl(''),
    contrasena: new FormControl(''),
    confircontra: new FormControl('')
    });
  }
  contactForm: FormGroup;

  constructor(private dbData: DataDbService) { 
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onReset(){
    this.contactForm.reset();
  }

  onSaveForm(){
    console.log('Saved');
  }

}
