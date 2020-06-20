import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  @Input('items') items;
  
  constructor(

    private router : Router,
    private storage : LocalStorage,

  ) { }

  ngOnInit() {
    var _ = this;
    console.log(_.items)
  }

  /* visiteAdd() {
    this.addVisite.emit(this.items);  // Déclenche l'output en passant la température
  } */

  addVisite(){
    var _ = this;
    console.log(_.items) 
    this.storage.setItem('data', _.items);
    this.router.navigate(['accueil']);
    console.debug(this.items)

  }
} 

