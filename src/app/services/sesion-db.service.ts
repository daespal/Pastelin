import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { SesionI } from '../models/sesion.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SesionDbService {

  private contactCollectionS: AngularFirestoreCollection<SesionI>


  constructor(private afs: AngularFirestore) {
    this.contactCollectionS = afs.collection<SesionI>('contacts');
   }

   saveMessages(newContact: SesionI): void{
     this.contactCollectionS.add(newContact);

   }
}
