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
  entity: Entity;

  constructor(private entService: EntityService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.entService.getEntityHeader(parseInt(params.get('id'))).subscribe(e => {
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
