import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  viewProfile:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  viewprofile(){
    this.viewProfile =! this.viewProfile
  }

}
