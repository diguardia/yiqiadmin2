import { Component, OnInit } from '@angular/core';
import { Attribute } from 'src/app/models/attribute';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { dragula, DragulaService } from "ng2-dragula/dist/ng2-dragula";

@Component({
  selector: 'app-entity-attributes',
  templateUrl: './entity-attributes.page.html',
  styleUrls: ['./entity-attributes.page.scss'],
})
export class EntityAttributesPage implements OnInit {
  attributes: Attribute[];

  constructor() {
    this.attributes = [];
    var a = new Attribute(); a.title="Punto de Venta"; this.attributes.push(a);
    a = new Attribute(); a.title="Número"; this.attributes.push(a);
    a = new Attribute(); a.title="Fecha"; this.attributes.push(a);
    a = new Attribute(); a.title="Observaciones"; this.attributes.push(a);
    a = new Attribute(); a.title="CAE"; this.attributes.push(a);
    a = new Attribute(); a.title="Fecha de Vto"; this.attributes.push(a);

   }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.attributes, event.previousIndex, event.currentIndex);
    console.log(event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
  }

}
