import {Component, OnInit} from '@angular/core';
import {AppareilService} from "./service/appareil.service";
import {any} from "codelyzer/util/function";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mon-projet-angular';

  constructor() {
  }

  ngOnInit(): void {
  }

}
