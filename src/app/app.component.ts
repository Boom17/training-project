import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //headerTitle = "Welcome to Login page11"
  loginAttempts =0;
  title = 'app';
  display = true;
  msg = [];
  headerTitle = 'aaa';

  countLogin(event: string){
    
    this.loginAttempts = this.loginAttempts+1;
    console.log("Chin: " + event)
    if(this.loginAttempts == 3){
      this.display=false;
    }
    this.msg.push("Login " + this.msg.length + ": "  + event );

    console.log("Chin msg:" + this.msg);

  }
}
