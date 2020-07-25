import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntityFunctionsPageRoutingModule } from './entity-functions-routing.module';

import { EntityFunctionsPage } from './entity-functions.page';
import { MonacoEditorModule } from 'ngx-monaco-editor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntityFunctionsPageRoutingModule,
    MonacoEditorModule.forRoot() // use forRoot() in main app module only.
  ],
  declarations: [EntityFunctionsPage]
})
export class EntityFunctionsPageModule {}
