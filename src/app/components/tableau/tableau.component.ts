import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],

})
export class TableauComponent implements OnInit {

  
  @Input('header') header : any[];
  @Input('datas') datas : any[];
  @Input('items') items : any; 
  
  constructor(

  ) { }

  ngOnInit() {
  }
  getVisite(){
    
  }

}
