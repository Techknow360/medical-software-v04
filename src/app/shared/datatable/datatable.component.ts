import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input('data') data : any;
  @Input('tconfig') tconfig : any;
  page: any = 1;
  count: any = 5;
  constructor() { }
  ngOnInit(): void {
    console.log("tconfig : ",this.tconfig);
  }
  

}
