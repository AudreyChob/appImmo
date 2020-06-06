import { Component, OnInit, Input } from '@angular/core';
import { unsupported } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
 
  @Input('items') items : any;
 
  constructor() { }

  ngOnInit() {}

}
