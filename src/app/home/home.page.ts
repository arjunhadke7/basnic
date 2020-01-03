import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToGenPhrase() {
    this.router.navigateByUrl('/magicball');
    console.log('went to magic ball page');
  }

  goToDiceApp() {
    this.router.navigateByUrl('/dice');
    console.log('went to dice app page');
  }
}
