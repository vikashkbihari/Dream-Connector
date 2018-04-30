import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integration-list-component',
  templateUrl: './integration-list.component.html',
  styleUrls: ['./integration-list.component.css']
})
export class integration implements OnInit {

  constructor() { }

  private integrationList: any;
  ngOnInit() {
  }

}
