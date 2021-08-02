import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private db: AngularFireDatabase) { 
    const itemsRef = db.list('items');
    itemsRef.push({ name: "kkk" });
  }



  switchon() {
    alert("Switched on");

  }

  switchoff() {
    alert("Switched off");
  }



}


