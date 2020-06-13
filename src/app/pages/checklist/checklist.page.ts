import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitesProvider } from 'src/app/providers/visites/visites.provider';





@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
  providers: [
    VisitesProvider,

  ],
})
export class ChecklistPage implements OnInit {
    items = this.visitesProvider.getItemsVisites();
    header = [this.visitesProvider.getHeaderVisites()];
    datas = [];
    visiteForm : FormGroup;

  constructor(
    private router : Router,
    public visitesProvider : VisitesProvider,
  )
    { 
      //this.header = Object.keys(this.visitesProvider.items);
      this.datas = [this.visitesProvider.items];
      //console.debug(JSON.stringify(this.datas))
      //console.debug(JSON.stringify(this.visitesProvider.items))
      
    }
    
    ngOnInit() {
      
    }
    addVisite(){
      var _ = this; 
      this.visitesProvider.updateDatas();
      this.router.navigate(['accueil']);
      //console.debug(this.datas)

    }
}
