import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitesProvider } from 'src/app/providers/visites/visites.provider';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { MenuController } from '@ionic/angular';






@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
  providers: [
    VisitesProvider,

  ],
})
export class ChecklistPage implements OnInit {
   items: {date: any, adresse: string, coordonnees: string, telephone: string, email: string,
    type: string, pieces: string, superficie: string, exposition: string, 
    prix: string, charges: string, taxe: string } =
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
  showMenu : boolean = false;


  constructor(
    private router : Router,
    public visitesProvider : VisitesProvider,
    private storage : LocalStorage,
    private menuCtrl : MenuController


  )
    { 
      
    }
    
    ngOnInit() {
      this.menuCtrl.enable(this.showMenu); 
      
    }

    addVisite(){
      var _ = this;
      console.log(_.items);
      let visite = { visite: _.items };
      localStorage.setItem('visite', JSON.stringify({visite}));                           
      this.router.navigate(['accueil']);  
      this.header = Object.keys(this.items)
      console.log(this.header)
      let headerVisite = {headerVisite: this.header};
      localStorage.setItem('headerVisite', JSON.stringify({headerVisite}));
      console.log("header check " +this.header);
    } 

    displayMenu(){
      if (this.showMenu === false){
      console.debug(this.showMenu)
        this.showMenu = true;
        this.menuCtrl.enable(this.showMenu);
      }
      else {
        this.showMenu = false;
        this.menuCtrl.enable(this.showMenu);
      }
    }
}
