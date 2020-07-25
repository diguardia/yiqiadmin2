import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://admin.yiqi.com.ar/'; //'http://localhost:1189/';
  SCHEMA_ID = 309; //'http://localhost:1189/';
  constructor() { }
}
