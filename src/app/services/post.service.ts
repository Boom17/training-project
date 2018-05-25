import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Typicode } from 'src/app/services/Typicode';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll() {
    return [
      {id: 1, title: 'Test'},
      {id: 2, title: 'Angular'},
    ];

  }
   
  getAllPost(){
     
    //return this.http.get<Config>('https://jsonplaceholder.typicode.com/posts');
  //const api ="https://jsonplaceholder.typicode.com/posts";
  const api = environment.apiBase + "/posts";
    return this.http.get<Typicode[]>(api);
  //  return [
  //   {id: 1, title: 'Test'},
  //   {id: 2, title: 'Angular'},
  // ];
   
  }

}
