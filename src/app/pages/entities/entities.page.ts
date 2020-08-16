import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { EntityService } from '../../services/entity.service';
import { Entity } from '../../models/entity';
import { Module } from '../../models/module';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.page.html',
  styleUrls: ['./entities.page.scss'],
})
export class EntitiesPage implements OnInit {
  entities: Entity[];
  allEntities: Entity[];
  modules: Module[];

  constructor(
    private entService: EntityService,
  ) {
    entService.getList().subscribe(entities => { 
      this.allEntities = entities; 
      this.entities = entities;
      this.updateModules();
    });

  }

  private updateModules() {
    this.modules = [];

    var dicMods: Record<string, Module> = {};
    this.entities.forEach(e => {
      var m: Module;
      if (dicMods[e.moduleName]) {
        m = dicMods[e.moduleName];
      }
      else {
        m = new Module();
        m.name = e.moduleName;
        m.entities = [];
        dicMods[e.moduleName] = m;
        this.modules.push(m);
      }

      m.entities.push(e);
    });
  }

  ngOnInit() {
  }

  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
    console.log("search:" + val);

    if (val && val.trim() !== '') {
      var search = val.toUpperCase();
      this.entities = [];
      this.allEntities.forEach(e => { if (e.title.toUpperCase().indexOf(search) > -1) { this.entities.push(e); } });
      this.updateModules();
    } else {
      this.entities = this.allEntities;
    }
  }

}
