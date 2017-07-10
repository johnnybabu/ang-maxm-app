import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions }  from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 
import { Hero } from './hero';
import { Products } from './products';
 
@Injectable()
export class HeroService {
  private heroesUrl = 'https://jsonplaceholder.typicode.com/todos';  // URL to web API
  private productsUrl='http://localhost:82/api/products/GetProductsList/1'; //get products list
 
  constructor (private http: Http) {}
 
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  create(name: string): Observable<Hero> {
    
  let headers = new Headers({ 'Content-Type': 'application/json' });
  
  let options = new RequestOptions({ headers: headers });
 
  return this.http.post(this.heroesUrl, { name }, options)
                  .map(this.extractData)
                  .catch(this.handleError);
}
getProducts():Observable<Products[]>{
  const headers = new Headers();
headers.append('Content-Type', 'application/json')
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Methods', 'GET');
headers.append('Access-Control-Allow-Origin', '*');

let options = new RequestOptions({ headers: headers });

    return this.http.get(this.productsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
}

addProduct(product:Products):Observable<Products>{
  const headers = new Headers();
  product.tenant_id=1;
headers.append('Content-Type', 'application/json')
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Methods', 'POST');
headers.append('Access-Control-Allow-Origin', '*');
  //const body=JSON.stringify(product);
  return this.http.post('http://localhost:82/api/products/SaveProduct',product,{ headers: headers })
  .map(this.extractData)
  .catch(this.handleError); 
}

removeProduct(product:Products):Observable<Products>{
  const headers = new Headers();
headers.append('Content-Type', 'application/json')
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Methods', 'POST');
headers.append('Access-Control-Allow-Origin', '*');
  //const body=JSON.stringify(product);
  return this.http.post('http://localhost:82/api/products/DeleteProduct',product,{ headers: headers })
  .map(this.extractData)
  .catch(this.handleError); 
}

updateProduct(product:Products):Observable<Products>{
  const headers = new Headers();
headers.append('Content-Type', 'application/json')
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Methods', 'POST');
headers.append('Access-Control-Allow-Origin', '*');
return this.http.post('http://localhost:82/api/products/UpdateProduct',product,{ headers: headers })
  .map(this.extractData)
  .catch(this.handleError); 
}



  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
 
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}