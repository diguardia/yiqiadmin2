import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'entities/:id',
    pathMatch: 'full',
    loadChildren: () => import('./pages/entity-detail/entity-detail.module').then( m => m.EntityDetailPageModule)
  },
  {
    path: 'entities',
    pathMatch: 'full',
    loadChildren: () => import('./pages/entities/entities.module').then( m => m.EntitiesPageModule), 
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then (m => m.LandingPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'entity-detail',
    loadChildren: () => import('./pages/entity-detail/entity-detail.module').then( m => m.EntityDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
