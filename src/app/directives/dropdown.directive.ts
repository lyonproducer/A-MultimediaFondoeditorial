import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private isShow: boolean = false;
  private dropdownParentEl = this.elementRef.nativeElement.closest('.dropdown');
  
  constructor(private elementRef: ElementRef) { }


  @HostListener('click') open() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.dropdownParentEl.classList.add('show');
      this.dropdownParentEl.querySelector(".dropdown-menu").classList.add('show');
    } else {
      this.dropdownParentEl.classList.remove('show');
      this.dropdownParentEl.querySelector(".dropdown-menu").classList.remove('show');
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.elementRef.nativeElement.contains(event.target) && this.isShow) {
      this.dropdownParentEl.classList.add('show');
      this.dropdownParentEl.querySelector(".dropdown-menu").classList.add('show');
    } else {
      this.dropdownParentEl.classList.remove('show');
      this.dropdownParentEl.querySelector(".dropdown-menu").classList.remove('show');
      this.isShow = false;
    }
  }
}
