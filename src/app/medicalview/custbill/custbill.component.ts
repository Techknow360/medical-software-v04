import { Component, HostListener, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-custbill',
  templateUrl: './custbill.component.html',
  styleUrls: ['./custbill.component.css']
})
export class CustbillComponent implements OnInit {
  signleUser :  boolean = false
  billform !: FormGroup
  isSubmitted :  boolean = false

  constructor( private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.initiateForm();
  }
  @HostListener('window:keypress', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(event.key == 'Enter' || event.key == '+'){
      this.createBillForms();
    }
    if(event.key == '-'){
      this.deleteBillForms(this.getbillitemsTableArray.length - 1);
    }
  }



  initiateForm(){
    this.billform =  this.formBuilder.group({
       customerDetails :  this.formBuilder.group({
        phonenum  : [null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
        custname : [null,[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
        custage : [null,[Validators.required,Validators.max(100)]],
        custaddr : [null,[Validators.required,Validators.minLength(2),Validators.maxLength(150)]]
       }),
       billitems : this.formBuilder.array([])
    })
    if(this.getbillitemsTableArray.length == 0){
      this.createBillForms()
    }
  }

  get getbillformControl() {
    return this.billform.controls;
  }

  get customerDetailsControls(){
    return (this.billform.get('customerDetails') as FormGroup).controls
  }

  get getbillitemsTableArray() {
    return this.getbillformControl['billitems'] as FormArray;
  }

  get getbillitemsTableArrayControls(){
    return (this.billform.get('billitems') as FormArray).controls
  }

  createBillForms(){
    const billitemsform = this.formBuilder.group({
        productname : [null,Validators.required],
        expirydate : [null,Validators.required],
        quantity : [null,Validators.required],
        unitprice : [null,Validators.required],
        discount : [null],
        tax : [null],
        netprice : [null,Validators.required]
    })
    this.getbillitemsTableArray.push(billitemsform)
  }

  deleteBillForms(index : number){
    if(this.getbillitemsTableArray.length > 1){
      this.getbillitemsTableArray.removeAt(index)
    }
}

}
