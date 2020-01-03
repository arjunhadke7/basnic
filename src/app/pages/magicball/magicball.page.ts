import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-magicball',
  templateUrl: './magicball.page.html',
  styleUrls: ['./magicball.page.scss'],
})
export class MagicballPage {

  constructor(private router: Router, private location: Location) { }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goBack() {
    this.location.back();
    console.log('went back with location from ng common');
  }
}
