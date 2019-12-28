import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagicballPageRoutingModule } from './magicball-routing.module';

import { MagicballPage } from './magicball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagicballPageRoutingModule
  ],
  declarations: [MagicballPage]
})
export class MagicballPageModule {}
