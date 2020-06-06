import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  @Input('header') header : any[];
  @Input('datas') datas : any[];
  @Input('items') items : any;
  constructor() { }

  ngOnInit() {
  }

}
