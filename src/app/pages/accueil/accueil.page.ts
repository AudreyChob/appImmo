import { Component, OnInit,Input } from '@angular/core';
import { VisitesProvider } from 'src/app/providers/visites/visites.provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  providers: [VisitesProvider,
],
})
export class AccueilPage implements OnInit {
  items : any;
  header : any[];
  datas  : any [];
  /* @Input('header') header : any[];
  @Input('items') items : any; 
  @Input('datas') datas : any[];*/

  constructor(
    public visitesProvider : VisitesProvider,
    private router : Router,
  )
   { 
     
   }
  
   ngOnInit() {
     this.items = this.visitesProvider.getItemsVisites();
     this.header = Object.keys(this.items)
     this.datas = [this.items];
     console.debug(this.header)
    console.debug('itemmms' + this.items)

  }
  addNewVisite(){
    this.router.navigate(['checklist'])
  }
}
