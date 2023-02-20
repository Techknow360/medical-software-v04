import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[Allowonlynumber]'
})
export class AllowonlynumberDirective {

  constructor() { }

  @HostListener('keypress', ['$event'])

  onChange(event: KeyboardEvent) {
      var charCode = (event.which) ? event.which : event.keyCode;
      if (charCode != 46 && charCode > 31  && (charCode < 48 || charCode > 57)){
          return false;  
       }    
      return true;
  }

}
