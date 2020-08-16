import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntitiesPageRoutingModule } from './entities-routing.module';

import { EntitiesPage } from './entities.page';

import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTree} from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntitiesPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [EntitiesPage]
})
export class EntitiesPageModule {}
