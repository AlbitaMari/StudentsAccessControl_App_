import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalAgePage } from './legal-age.page';

const routes: Routes = [
  {
    path: '',
    component: LegalAgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalAgePageRoutingModule {}
