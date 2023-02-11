import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTablesort]'
})
export class TablesortDirective {
  @Input('defaultdisplay')  defaultdisplay : boolean = false
  private _shown = false;

  constructor(private el: ElementRef) { 
    console.log("Default  : ",this.defaultdisplay);
    this.sortingDefaultIcon()
  }

  sortingDefaultIcon(){
    const parent = this.el.nativeElement;
    console.log("Parent  : ",parent);
    const icon = document.createElement('i');
    icon.classList.add('fa')
    parent.appendChild(icon);
    parent.addEventListener('click', () => {
      this.toggleSorting(icon)
    });
  }

  toggleSorting(icon : HTMLElement){
    this._shown = !this._shown;
    if(this._shown){
      icon.classList.add('fa-long-arrow-up')
      icon.classList.replace('fa-long-arrow-down','fa-long-arrow-up')
    }else{
      icon.classList.replace('fa-long-arrow-up','fa-long-arrow-down')

    }
  }

  

}