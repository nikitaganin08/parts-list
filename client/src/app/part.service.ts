import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Part} from "./part";

@Injectable({
  providedIn: 'root'
})
export class PartService {

  private baseUrl = 'http://parts-list.herokuapp.com/api/parts';

  constructor(private http: HttpClient) { }

  getPart(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPart(part: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, part);
  }

  updatePart(id: number, part: Object): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, part);
  }

  deletePart(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPartsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPartByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }

  getRequiredPartsList(necessity: boolean) : Observable<any> {
    return this.http.get(`${this.baseUrl}/required/${necessity}`)
  }

  getMinRequiredPart() : Observable<any> {
    return this.http.get(`${this.baseUrl}/min`)
  }
}
