import { Component, Input, OnInit, ViewChild ,Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  @Output("closeprofile") closeprofileModel : EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  
  }
  closeprofile(){
      this.closeprofileModel.emit();
  }

}
