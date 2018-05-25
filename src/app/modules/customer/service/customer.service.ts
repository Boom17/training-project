import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll() {
    const api = environment.apiBase + '/users';
    return this.http.get(api);
  }

  getCustomerDetail(id ='') {
    const api = environment.apiBase + '/users/' + id;
    return this.http.get(api);
  }
}

