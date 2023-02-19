import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm!  :  FormGroup;
  isSubmitted :  boolean = false;
  isEditable : boolean = false;
  constructor(private formbuilder :  FormBuilder) { }

  ngOnInit(): void {
    this.createUserForm()
  }

  createUserForm(){
    this.userForm = this.formbuilder.group({
      firstName : [null,Validators.required],
      middleName : [null,Validators.required], 
      lastName : [null,Validators.required],
      fatherName  : [null,Validators.required],
      address : [null,Validators.required],
      dateofbirth  : [null,Validators.required],
      mobileno  : [null,Validators.required],
      email :[null,Validators.required],
      gender : [null,Validators.required],
      location : [null,Validators.required]
    })
  }

  get userFormControl(){
    return this.userForm.controls
  }

  saveUserFormDetails(){
    this.isSubmitted = true;
    console.log("User Form  :",this.userForm);
  }

}
