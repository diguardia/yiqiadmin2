import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Entity } from '../models/entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  constructor(
    private http: HttpClient,
    private env: EnvService,
    private storage: NativeStorage,
    private auth: AuthService,
  ) { 
    
  }
  
  getList(): Observable<Entity[]> {
    let params = new HttpParams();
    params = params.set("schemaId", this.env.SCHEMA_ID.toString());

    let options = {headers: this.auth.getHttpHeaders(), params: params};
    
    return this.http.get<Entity[]>(this.env.API_URL + 'api/entitiesapi/GetEntityList', options);
  }

  getFunctions(entityId: number): Observable<string> {
    let params = new HttpParams();
    params = params.set("schemaId", this.env.SCHEMA_ID.toString());
    params = params.set("entityId", entityId.toString());

    let options = {headers: this.auth.getHttpHeaders(), params: params};
    
    return this.http.get<string>(this.env.API_URL + 'api/entitiesapi/GetFunctions', options);
  }

  saveFunctions(entityId: number, code: string): Observable<any> {
    let body = {schemaId: this.env.SCHEMA_ID, entityId: entityId,functions: code};

    let options = {headers: this.auth.getHttpHeaders() };
    
    return this.http.post<any>(this.env.API_URL + 'api/entitiesapi/SaveFunctions', body, options)
/*    .subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    ); */
  }

  getEntityHeader(entityId: number): Observable<Entity> {
    let params = new HttpParams();
    params = params.set("schemaId", this.env.SCHEMA_ID.toString());
    params = params.set("entityId", entityId.toString());

    let options = {headers: this.auth.getHttpHeaders(), params: params};
    
    return this.http.get<Entity>(this.env.API_URL + 'api/entitiesapi/GetEntityHeader', options);
  }

}
