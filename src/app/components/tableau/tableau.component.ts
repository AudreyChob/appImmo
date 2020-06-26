import { Component, OnInit, Input } from '@angular/core';
import { VisitesProvider } from 'src/app/providers/visites/visites.provider';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  providers: [VisitesProvider],
})
export class TableauComponent implements OnInit {

  /* item = this.visitesProvider.getItemsVisites();
  head = this.visitesProvider.getHeaderVisites();
  data = this.visitesProvider.getDatasVisites(); */
  @Input('header') header : any[];
  @Input('datas') datas : any[];
  @Input('items') items : any; 
  
  constructor(
    public visitesProvider : VisitesProvider,
  ) { }

  ngOnInit() {
  }
  getVisite(){
    
  }

}
