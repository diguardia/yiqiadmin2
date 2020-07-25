import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityAttributesPage } from './entity-attributes.page';

const routes: Routes = [
  {
    path: '',
    component: EntityAttributesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityAttributesPageRoutingModule {}
