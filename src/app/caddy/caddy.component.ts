import { Component, OnInit } from '@angular/core';
import { CaddyService } from './caddy.service';

    @Component({
      selector: 'app-caddy',
      templateUrl: './caddy.component.html',
      styleUrls: ['./caddy.component.css']
    })

    export class CaddyComponent implements OnInit {

        constructor(private CaddyService: CaddyService) { }
          onSave(data) {
          this.CaddyService.saveData(data);
        }
          onGetdata() {
          this.CaddyService.getData();
        }
        ngOnInit() {
        }
    }
