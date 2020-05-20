import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../services/entity.service';
import { Entity } from '../../models/entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.page.html',
  styleUrls: ['./entities.page.scss'],
})
export class EntitiesPage implements OnInit {
  entities: Entity[];
  allEntities: Entity[];
  constructor(
    private entService: EntityService,
  ) {
    entService.getList().subscribe(entities => { this.allEntities = entities; this.entities = entities });

  }

  ngOnInit() {
  }

  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
    console.log("search:" + val);

    if (val && val.trim() !== '') {
      var search = val.toUpperCase();
      this.entities = [];
      this.allEntities.forEach(e => { if (e.title.toUpperCase().indexOf(search) > -1) { this.entities.push(e); } }
      );
    } else {
      this.entities = this.allEntities;
    }
  }

}
