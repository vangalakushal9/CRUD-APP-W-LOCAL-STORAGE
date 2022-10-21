import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'express';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit{
  div1:boolean = false;
  userEmail: any;
  showEmail:any;
  constructor( private router: Router) {
   }

  ngOnInit(): void {
   this.userEmail=localStorage.getItem('LoginData')
   let userData = JSON.parse(this.userEmail)
   console.log(this.userEmail)
   userData.forEach((data:any) => {
    for(let key in data){
     this.showEmail = data.LoginEmail
    }
   });
  }

  div1Function(){
    this.div1=!this.div1;
    // setTimeout(()=>{
    //   this.div1=false;
    // },2000)
}

logoutFunc(){
this.router.navigate(['/'])
}

}
