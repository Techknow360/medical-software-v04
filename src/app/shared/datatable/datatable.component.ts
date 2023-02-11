import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input('data') data : any[];
  @Input('tconfig') tconfig : any;
  @ViewChild('columnfilter') columnfilter:ElementRef;
  page: any = 1;
  count: any = 10;
  colspan : string;
  filter :  string
  isFilterEnabled :  boolean = false
  sortDir = 1;
  responsive :  boolean = true
  showItems = [10,25,50,100,250,500]
  maxSize: number = 7;
  currentPage : any =[];
  dataSource : any
  constructor() { }
  ngOnInit(): void {
    this.colspan = this.tconfig.config.length + 1;
    this.onShowCount();
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


  onPageChange(number : number){
    this.page = number;
  }
  
  onShowCount(){
    this.currentPage = []
    var cpage =  this.data.length / this.count
    if(Math.round(cpage) > 1){
      for(let i = 1;i<= Math.round(cpage);i++){
        this.currentPage.push(i);
      }
    }else{
      this.currentPage = [1]
      this.page = 1
    }
  }

  searchItems(items:string,event : any) {
    let results : any = [];
    var searchTetx =  event.target.value;
    const valueInput = this.columnfilter.nativeElement
       this.data.forEach(it => {
         if (it[items].toLowerCase().includes(searchTetx.toLowerCase())) {
            results.push(it);
         }
       });
       console.log("Result  : ",this.data);
   }

}