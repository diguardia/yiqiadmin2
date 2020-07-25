import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityFunctionsPage } from './entity-functions.page';

const routes: Routes = [
  {
    path: '',
    component: EntityFunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityFunctionsPageRoutingModule {}
