import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor() {
  }

  ngOnInit(){
  }

  heroSearch(termino:string){
    console.log(termino);
  }

}
