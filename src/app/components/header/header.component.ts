import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Typicode } from '../../services/Typicode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string;

  @Output()
  loginTrial = new EventEmitter();
  color = "green";
  bgColor = 'blue';

  credentail = {
    email: '123@g.c',
    password: '111'
  }
 posts = [];
 allPosts1 = [];
 allPosts:Array<Typicode>;

  constructor(private postSvc: PostService) {
    //  this.postSvc = postService;
     }
  
    ngOnInit() {
      this.posts = this.postSvc.getAll();
    //this.allPosts = this.postSvc.getAll();
     this.postSvc.getAllPost().subscribe(data => {this.allPosts = data});    
      
    }


  
  login(email: string, password: string) {

    console.log(email, password);
    if (email === "123@g.c" && password === "111") {
      localStorage.setItem('isLogin', '1');
      status = "Success";
      // alert("Login Success");  
      this.color = "blue";
      //return;
    } else {
      //alert("Login failed");
      localStorage.setItem('isLogin', '0');
      status = "fail";
      this.color = "red";
      this.title = "-Login fail";
    }

    this.loginTrial.emit(status);
  }

}



export interface StatusEmint{
  //status = 'SUCCESS' | 'FAIL' ;
}