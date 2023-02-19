import { Directive,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[Errormessage]'
})
export class ErrormessageDirective {
  @Input('FormErrors') FormErrors :  any 
  @Input('isSubmitted') isSubmitted  : any

  constructor(private el: ElementRef) 
  { 
    this.inputFiledError();
  }

  inputFiledError(){
    const parent = this.el.nativeElement;
    parent.addEventListener('blur', () => {
      this.addErrorClass();
    });
  }

  addErrorClass(){
    if(this.FormErrors=='INVALID'){
      this.el.nativeElement.classList.add('invalid')
      this.el.nativeElement.classList.replace('valid','invalid')
      this.el.nativeElement.classList.replace('disabled','invalid')
    }else if(this.FormErrors=='VALID'){
      this.el.nativeElement.classList.add('valid')      
      this.el.nativeElement.classList.replace('invalid','valid')
      this.el.nativeElement.classList.replace('disabled','valid')
    }else if(this.FormErrors=='DISABLED'){
      this.el.nativeElement.classList.add('disabled')
      this.el.nativeElement.classList.replace('invalid','disabled')
      this.el.nativeElement.classList.replace('valid','disabled')
    }
  }

}
