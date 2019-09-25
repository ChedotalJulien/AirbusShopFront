     import { Injectable } from '@angular/core';
     import { HttpClient } from '@angular/common/http';

     @Injectable({
      providedIn: 'root'
    })

    export class CatalogueService {
       public host:string="http://10.0.4.85:8080"

        constructor(private http:HttpClient) { }

       public getResource(url){
          return this.http.get(this.host+url);
       }

        uploadDonneesFiliere(file:file): Observable<HttpEvent<{}>> {
              let formdata: FormData = new FormData();

            formdata.append('file',file);
            if(this.jwToken==null) this.loadToken();


           const req = new HttpRequest('POST', this.host+'/uploadFiliere', formdata, {
              reportProgress: true,
              responseType: 'text',
              headers:new Httpheaders({'Authorization':this.jwToken})
            });

             return this.http.request(req);
        }
    }
