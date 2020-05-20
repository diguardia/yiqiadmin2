import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntityDetailPageRoutingModule } from './entity-detail-routing.module';

import { EntityDetailPage } from './entity-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntityDetailPageRoutingModule
  ],
  declarations: [EntityDetailPage]
})
export class EntityDetailPageModule {}
