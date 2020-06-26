import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-visite',
  templateUrl: './card-visite.component.html',
  styleUrls: ['./card-visite.component.scss'],
})

export class CardVisiteComponent implements OnInit {
  @Input('header') header : any[];
  @Input('datas') datas : any[];
  @Input('items') items : any; 
  constructor() { }

  ngOnInit() {}

}