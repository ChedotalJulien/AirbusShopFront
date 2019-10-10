/* importing model */
import {ItemProduct} from './item-product.model';
import {Client} from './client.model';

/* export Class */
export class Caddy{

/* Constructor */
constructor(name:string){this.name=name;}
  public name:string;
  public items:Map<number,ItemProduct>=new Map();
  public client:Client;
}

// END //
