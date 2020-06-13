import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
 
  @Input('items') items : any;
  @Input('header') header : any[];
  @Input('datas') datas : any[];
  //@Output() addVisite = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  /* visiteAdd() {
    this.addVisite.emit(this.items);  // Déclenche l'output en passant la température
  } */


} 

