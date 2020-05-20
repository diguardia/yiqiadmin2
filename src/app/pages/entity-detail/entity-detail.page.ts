import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { EntitiesPage } from '../entities/entities.page';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.page.html',
  styleUrls: ['./entity-detail.page.scss'],
})
export class EntityDetailPage implements OnInit {
  entity:Entity;
  
  constructor() {
    this.entity = new Entity();
    this.entity.title = "Factura de compra";
    this.entity.name = "FACTURA_COMPRA";
    this.entity.moduleName = "Compras";
    this.entity.id = 1;
    this.entity.eventsCount = 4;
    this.entity.validationsCount = 2;
    this.entity.childEntitiesCount = 3;

     
   }
   showDetail(id:Number) {
    const nav = document.querySelector('ion-nav');
    nav.push(EntitiesPage);
    }     
   
  ngOnInit() {
  }

}
