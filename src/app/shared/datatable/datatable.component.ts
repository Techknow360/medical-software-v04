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
  sortDir = 1;
  constructor() { }
  ngOnInit(): void {
    this.colspan = this.tconfig.config.length + 1;
  }

  triggerRefresh(){
    console.log("Refresh Triggered");
  }

  sortArr(colName:any){
    this.sortDir = this.sortDir == 1 ? -1 :1
    this.data.sort((a :string,b : string)=>{
      a= a[colName].toLowerCase();
      b= b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }
  

}