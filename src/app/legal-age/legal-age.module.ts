import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalAgePageRoutingModule } from './legal-age-routing.module';

import { LegalAgePage } from './legal-age.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalAgePageRoutingModule
  ],
  declarations: [LegalAgePage]
})
export class LegalAgePageModule {}
