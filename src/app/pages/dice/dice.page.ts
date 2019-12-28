import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.page.html',
  styleUrls: ['./dice.page.scss'],
})
export class DicePage {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

}
