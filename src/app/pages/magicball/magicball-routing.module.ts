import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicballPage } from './magicball.page';

const routes: Routes = [
  {
    path: '',
    component: MagicballPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicballPageRoutingModule {}
