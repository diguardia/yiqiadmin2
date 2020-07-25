import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { EntityService } from 'src/app/services/entity.service';

@Component({
  selector: 'app-entity-functions',
  templateUrl: './entity-functions.page.html',
  styleUrls: ['./entity-functions.page.scss'],
})
export class EntityFunctionsPage implements OnInit {
  editorOptions = {theme: 'vs-dark', language: 'javascript', };
  code: string;
  log: string;
  entity:Entity;
  
  constructor(
    private entService: EntityService
  ) { 
    this.entity = new Entity();
    this.entity.title = "Factura de compra";
    this.entity.name = "FACTURA_COMPRA";
    this.entity.moduleName = "Compras";
    this.entity.id = 1;
    this.entity.eventsCount = 4;
    this.entity.validationsCount = 2;
    this.entity.childEntitiesCount = 3;     
    this.entService.getFunctions(this.entity.id).subscribe((s)=>this.code = s);
  }

  ngOnInit() {
  }

  saveFunctions() {
    this.log = "";
    this.entService.saveFunctions(this.entity.id, this.code).subscribe(
      data => this.log += data,
      error =>  this.log += error
    );
  }

}
