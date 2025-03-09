import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage implements OnInit {

  isLoggedIn = false;

  constructor() {}

  ngOnInit() {
    localStorage.getItem('user') ? this.isLoggedIn = true : this.isLoggedIn = false;
  }

}
