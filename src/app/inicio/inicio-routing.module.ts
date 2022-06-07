import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';


const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'Perfil',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'Logs',
        loadChildren: () => import('../logs/logs.module').then(m => m.LogsPageModule)
      },
      {
        path: 'QRCode',
        loadChildren: () => import('../code/code.module').then(m => m.CodePageModule)
      },
      {
        path: '',
        redirectTo: '/inicio/Perfil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio/Perfil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
