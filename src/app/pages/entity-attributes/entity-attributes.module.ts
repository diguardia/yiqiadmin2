import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntityAttributesPageRoutingModule } from './entity-attributes-routing.module';

import { EntityAttributesPage } from './entity-attributes.page';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { DragulaModule,DragulaService  } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntityAttributesPageRoutingModule,
    DragDropModule,DragulaModule,DragulaService
  ],
  declarations: [EntityAttributesPage]
})
export class EntityAttributesPageModule {}
