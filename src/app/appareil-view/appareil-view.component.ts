import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../service/appareil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareils : any[] ;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    console.log('On allume tout!');
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    console.log('On éteint tout!');
    if(confirm('Are you sure?')){
      this.appareilService.switchOffAll();
    } else {
      return null;
    }

  }
}
