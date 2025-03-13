import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { noIngresadoGuard } from '../guard/no-ingresado.guard';
import { ingresadoGuard } from '../guard/ingresado.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule),
        canActivate: [ingresadoGuard]
      },
      {
        path: 'recibos',
        loadChildren: () => import('../pages/recibos/recibos.module').then(m => m.RecibosPageModule),
        canActivate: [ingresadoGuard]
      },
      {
        path: 'gastos',
        loadChildren: () => import('../pages/gastos/gastos.module').then(m => m.GastosPageModule),
        canActivate: [ingresadoGuard]
      },
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPageModule),
        canActivate: [ingresadoGuard]
      },
      /* {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule),
        canActivate: [noIngresadoGuard]
      }, */
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
