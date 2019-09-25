    import { Injectable } from '@angular/core';

    @Injectable({
      providedIn: 'root'
    })

    export class CaddyService {

        constructor() {}

        saveData(data) {
        console.log('save');
        }
        getData() {
        console.log('ajout');
        }
    }


