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
  count: any = 10;
  colspan : string;
  isFilterEnabled :  boolean = false
  constructor() { }
  ngOnInit(): void {
    this.colspan = this.tconfig.config.length + 1;

    console.log("tconfig : ",this.tconfig.config.length);
  }

  triggerRefresh(){
    console.log("Refresh Triggered");
  }
  

}
