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
  filter :  string =''
  isFilterEnabled :  boolean = false
  sortDir = 1;
  responsive :  boolean = true
  showItems = [10,25,50,100,250,500]
  maxSize: number = 7;
  currentPage : any =[];
  dataSource : any
  tabledata :  any = []
  constructor() { }
  ngOnInit(): void {
    this.colspan = this.tconfig.config.length + 1;
    this.onShowCount();
    this.searchItems()
  }

  triggerRefresh(){
    console.log("Refresh Triggered");
  }

  sortArr(colName:any){
    this.sortDir = this.sortDir == 1 ? -1 :1
    this.tabledata.sort((a :string,b : string)=>{
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
  
  searchItems() {
    this.tabledata = this.data.filter((items) => this.isMatch(items));
   }

   isMatch(item : any) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      var searchItem  = this.stringSanitize(item);
      var filterdata  = this.stringSanitize(this.filter);
      return searchItem.indexOf(filterdata) > -1
    }
  }

  coulmnSearch(key : string,event  :  any){
    var sText  = event.target.value;
    if(this.filter == '' && this.filter.length <= 0){
      this.tabledata =  this.data.filter((item) => this.nestedSearch(item,key,sText))
    }else{
      this.tabledata =  this.tabledata .filter((item) => this.nestedSearch(item,key,sText))
    }
  }

  nestedSearch(item,key,sText){
    if (item instanceof Object) {
      return this.nestedSearch(item[key],key,sText);
    } else {
      var searchItem  = this.stringSanitize(item);
      var filterdata  = this.stringSanitize(sText);
      return searchItem.indexOf(filterdata) > -1
    }
  }

  stringSanitize(value){
   return value.toString().toLowerCase().trim().replace(/\s+/g, "");
  }


}