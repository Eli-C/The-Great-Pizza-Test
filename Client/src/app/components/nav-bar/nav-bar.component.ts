import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

  redirect(pagename: string) {
    this.router.navigate([pagename]);
  }

  open(menu){
    menu.openMenu();
  }

}
