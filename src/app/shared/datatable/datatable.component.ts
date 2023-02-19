import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input('data') data : any[];
  @Input('tconfig') tconfig : any;
  @Output('bodyAction') bodyAction : EventEmitter<any> = new EventEmitter();
  @Output('headerAction') headerAction : EventEmitter<any> = new EventEmitter();
  @ViewChild('columnfilter') columnfilter:ElementRef;
  page: any = 1;
  count: any = 10;
  colspan : string;
  filter :  string =''
  isFilterEnabled :  boolean = false
  sortDir = 1;
  responsive :  boolean = true
  showItems = [10,25,50,100,250,500]
  maxSize: number = 6;
  currentPage : any =[];
  dataSource : any
  tabledata :  any = []
  totalCount : number  = 0;
  totalFilteredCount : number  = 0;
  showStartCount : number = 0;
  showEndCount :  number = 0;
  isSearchEnabled :  boolean = false;
  tableconfig : any;
  constructor() { }
  ngOnInit(): void {
    this.colspan = this.tconfig.config.length + 1;
    this.tableconfig = this.tconfig.tableconfig
    if(this.tableconfig.pagination){
      this.onShowCount();
      this.searchItems();
      this.showEntries();
      if(this.data != null && this.data.length > 0){
        this.totalCount = this.data.length
      }
    }else{
      this.page = 1;
      this.count = this.data.length
      this.tabledata = this.data
    }
  }

  sortArr(colName:any){
    if(this.tableconfig.sorting){
      this.sortDir = this.sortDir == 1 ? -1 :1
      this.tabledata.sort((a :string,b : string)=>{
        a= a[colName].toLowerCase();
        b= b[colName].toLowerCase();
        return a.localeCompare(b) * this.sortDir;
      });
    }
  }


  onPageChange(number : number){
    this.page = number;
    this.showEntries('PAGE');
  }
  
  onShowCount(){
    this.currentPage = []
    if(!this.isSearchEnabled){
      var cpage =  this.data.length / this.count
    }else{
      var cpage =  this.tabledata.length / this.count
    }
    if(Math.round(cpage) >= 1){
      for(let i = 1;i<= Math.round(cpage);i++){
        this.currentPage.push(i);
      }
    }else{
      this.currentPage = [1]
      this.page = 1
    }
  }
  
  searchItems() {
    if(this.filter.length > 0){
      this.isSearchEnabled = true
      this.tabledata = this.data.filter((items) => this.isMatch(items));
      this.showEntries('SEARCH')
    }else{
      this.tabledata = this.data.filter((items) => this.isMatch(items));
      this.isSearchEnabled = false
    }
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
      this.tabledata =  this.tabledata.filter((item) => this.nestedSearch(item,key,sText))
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

  showEntries(event?){
    this.onShowCount();
    if(event == 'SHOWCOUNT'){
      this.showStartCount = this.totalCount <= 0 ? 0 : 1
      this.showEndCount = this.count  > this.totalCount ? this.totalCount : this.count
    }
    else if(event == 'PAGE'){
      this.showStartCount =this.page ==1  ? 1  : (this.count * (this.page -1)) + 1
      this.showEndCount = (this.count * this.page)  > this.totalCount ?  this.totalCount : this.count * this.page 
    }else if(event == 'SEARCH'){
      this.showStartCount  = this.tabledata.length > 0 ? 1  : 0;
      console.log("TAB LENGTH  :",this.tabledata.length,"COUNT  : ",this.count );
      this.showEndCount =  this.tabledata.length < this.count ? this.tabledata.length :  this.count 
      this.totalFilteredCount = this.tabledata.length
    }else{
      this.showStartCount = this.data.length <= 0 ? 0 : 1
      this.showEndCount  = this.count
    }
  }

  exportexcel(tableId): void
  {
    let element = document.getElementById(tableId);
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb,tableId+'.xlsx');
 
  }

  onRefresh(){

  }

  onBodyActionClick(type){
    this.bodyAction.emit({'Action':type});
  }

  onHeaderActionClick(type){
    this.headerAction.emit({'Action':type})
  }
}