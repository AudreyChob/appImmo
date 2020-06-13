import {Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';


@Injectable()
export class VisitesProvider {
    items: {date: any, adresse: string, coordonnees: string, telephone: string, email: string,
        type: string, pieces: string, superficie: string, exposition: string, prix: string, charges: string, taxe: string } 
    header : any[];
    datas: any[];
    liste :  any;
    constructor(
      private storage : Storage,
    ){
      var _ = this;
      this.storage.get('data').then((val) => {
        _.datas = val;
        this.datas = _.datas;
        //console.log('Your age is', JSON.stringify(this.datas));
        return this.datas;
      });
    }

    getItemsVisites(){
      var _ = this;
      _.items = { 
        date: '',
        adresse: 'r',
        coordonnees: '',
        telephone: 'r',
        email : '',
        type: '',
        pieces: '',
        superficie: '',
        exposition: '',
        prix: '',
        charges : '',
        taxe: '',
      };
      this.items = _.items;
      return this.items
    }

    getHeaderVisites(){
      var _ = this;
      _.header = Object.keys(this.items);
      this.header = _.header;
      //console.debug(this.header);
      return this.header;
    }
    updateDatas(){
      var _ = this;
      _.datas = [_.items];
      this.storage.set('data', _.datas);
      console.debug("p.data"+_.datas)
      console.debug('p items'+_.items)
      return _.datas
    }

}
