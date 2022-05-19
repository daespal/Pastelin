import { Component, OnInit } from '@angular/core';
import { SesionDbService } from '../services/sesion-db.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SesionI } from '../models/sesion.interface';
@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
  createFormGroup(){
    return new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl('')
    });
  }

  contactForm: FormGroup;

  constructor(private dbSesion: SesionDbService) { 
    this.contactForm = this.createFormGroup();
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    console.log('Saved');
  }

  ngOnInit(): void {
  }

}
