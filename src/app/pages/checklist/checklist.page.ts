import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitesProvider } from 'src/app/providers/visites/visites.provider';



@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {
    items: {date: any, adresse: string, coordonnees: string, telephone: string, email: string,
     type: string, pieces: string, superficie: string, exposition: string, prix: string, charges: string, taxe: string } = 
       {
          date: '',
          adresse: '',
          coordonnees: '',
          telephone: '',
          email : '',
          type: '',
          pieces: '',
          superficie: '',
          exposition: '',
          prix: '',
          charges : '',
          taxe: '',
        }; 
    header : any[];
    datas: any[];

    visiteForm : FormGroup;

  constructor(
    private router : Router,
    public visitesProvider : VisitesProvider,
  )
    { 
      this.header = Object.keys(this.visitesProvider.items);
      this.datas = [this.visitesProvider.items];
      //console.debug(JSON.stringify(this.header))
      //console.debug(JSON.stringify(this.visitesProvider.items))
      
    }
    
    ngOnInit() {
      
    }
    addVisite(){
      var _ =this;
    _.datas = this.datas;
    this.datas = _.datas;
    this.router.navigate(["accueil"]);
    console.debug(JSON.stringify(this.header))
    console.debug(JSON.stringify(this.datas))
  } 
}
