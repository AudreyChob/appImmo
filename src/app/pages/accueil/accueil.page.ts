import { Component, OnInit,Input, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  items : any;
  header : any[];
  datas : any[];

  constructor(
    private router : Router,
  )
   { 
     
   }
  
   ngOnInit() {
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
}
