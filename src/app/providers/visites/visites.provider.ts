import {Injectable } from '@angular/core';



@Injectable()



export class VisitesProvider {
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


    constructor(){}
}
