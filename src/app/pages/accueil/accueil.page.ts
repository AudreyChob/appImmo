import { Component, OnInit,Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  items : any;
  header : any[];
  datas : any[];
  showMenu : boolean = false;
  
  constructor(
    private router : Router,
    private menuCtrl : MenuController
  )
   { 
     
   }
  
   ngOnInit() {


      this.menuCtrl.enable(this.showMenu); 
     


    var _ = this;
    var visite = JSON.parse(localStorage.getItem("visite"));
    visite = visite.visite.visite;
    console.debug("var visite " + visite);
    _.items = visite;
    this.items = _.items;
    console.log("_.items" +_.items);


    var headerVisite = JSON.parse(localStorage.getItem("headerVisite"));
    headerVisite = headerVisite.headerVisite.headerVisite;
    _.header = headerVisite;
    this.header = _.header;
    console.log('header acc ' + headerVisite);


    _.datas = [_.items];
    console.log("datas" +_.datas)
    this.datas = _.datas;
  }


  addNewVisite(){
    this.router.navigate(['checklist'])
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
