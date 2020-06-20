import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('header') header : any[];
  @Input('datas') datas : any[];
  @Input('items') items : any; 
  constructor() { }

  ngOnInit() {}

}
