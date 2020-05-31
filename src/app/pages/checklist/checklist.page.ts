import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {
  items: {date: any, adresse: string, coordonnees: string, telephone: string, email: string,
     type: string, pieces: string, superficie: string, exposition: string, prix: string, charges: string, taxe: string } = 
       {
    date: 'default',
    adresse: 'default',
    coordonnees: 'default',
    telephone: 'default',
    email : 'default',
    type: 'default',
    pieces: 'default',
    superficie: 'default',
    exposition: 'default',
    prix: 'default',
    charges : 'default',
    taxe: 'default',
  };
  titles : any[];
  data: any[];

  visiteForm : FormGroup;

  constructor() { 
    var _ =this;
    this.titles = Object.keys(this.items);
    _.data = Object.values(this.items);
    this.data = _.data;
 
  }

  ngOnInit() {
console.debug(JSON.stringify(this.items))
console.debug(this.data)

  }

}
