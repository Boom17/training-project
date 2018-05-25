import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Typicode } from '../../services/Typicode';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  posts = [];
  //allPosts : Typicode[] = [];
  allPosts:Array<Typicode>;
  //allPosts:Array<Typicode>;
//  private postSvc: PostService;

  constructor(private postSvc: PostService) {
  //  this.postSvc = postService;
   }

  ngOnInit() {
    this.posts = this.postSvc.getAll();
    this.postSvc.getAllPost().subscribe(data => {this.allPosts = data});    
    this.getPostsAsync();
  }

  getPostsPromise(){
    this.postSvc.getAllPost().toPromise()
     .then(data => {this.allPosts = data});    
  }

  async getPostsAsync(){
    //this.posts = await this.getAllPost().toPromise();     
  }

}
