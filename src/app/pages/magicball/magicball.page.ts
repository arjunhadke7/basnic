import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magicball',
  templateUrl: './magicball.page.html',
  styleUrls: ['./magicball.page.scss'],
})
export class MagicballPage {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

}
