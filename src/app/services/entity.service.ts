import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'Authorization': this.auth.token["token_type"]+" "+this.auth.token["access_token"]
    });
    let params = new URLSearchParams();
    params.append("schemaId", "1021");

    let options = {headers: headers, search: params};
    
    return this.http.get<Entity[]>(this.env.API_URL + 'api/entitiesapi/GetEntityList?schemaId=1021', options);
  }
  
}
