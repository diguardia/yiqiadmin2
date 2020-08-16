import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { EntitiesPage } from '../entities/entities.page';
import { EntityFunctionsPage } from '../entity-functions/entity-functions.page';
import { EntityService } from 'src/app/services/entity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.page.html',
  styleUrls: ['./entity-detail.page.scss'],
})
export class EntityDetailPage implements OnInit {
  entity: Entity = new Entity();

  constructor(private entService: EntityService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      var id = parseInt(params.get('id'));
      console.log("Getting header for entity " + id);
      this.entService.getEntityHeader(id).subscribe(e => {
        e.id = id;
        this.entity = e;
      })
    });
  }

  showDetail(id: Number) {
    const nav = document.querySelector('ion-nav');
    nav.push(EntitiesPage);
  }


  ngOnInit() {
  }

}
