import { Component, Input } from '@angular/core';
import { GithubService } from './github/github.service';
import{NavComponent } from './nav.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import { PrivacyService } from './privacy.service';
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  http: any;

  //constructor(private githubService: GithubService){}
  constructor(private privacyService: PrivacyService){}
  title = 'app';
  @Input() 
  username:string;
  userdata: any;
  userdata1:any;
  // load_userdata():void{
  //   this.githubService.get_data(this.username)
  //   .subscribe(res => {this.userdata1 = res.json(); console.log(this.userdata1); console.log('1'); console.log(res.json());});
  //   console.log('load: ')
  // }
 
  ///
  onClick(option) :void {
    console.log(option.value); 
    // this.privacyService.get_data()
    // .subscribe(res => {this.userdata1 = res.json(); console.log(this.userdata1); console.log('1'); console.log(res.json());});
    this.privacyService.put_data( option.value)
    .subscribe(res => {this.userdata1 = res.json(); console.log(this.userdata1); console.log('1'); console.log(res.json());});

  }
  addData(Id:number,Name:string,Repo:string):void{
    var headers = new Headers();
    headers.append('Content-Type','application/json; charset=utf-8');
    this.http.post('http://localhost:5000/api/ProductInfo',JSON.stringify({id:Id,username:Name,reponame:Repo}),{headers :headers}).subscribe();
    
    //this.http.post(this.baseUrl+'api/ProductInfo',JSON.stringify({id:iD,username:name,reponame:reponame}),{headers :headers})
    //.subscribe();
  }

  /*
  load_userdata():void{
    this.githubService.get_data(this.username)
    .subscribe(res => {this.userdata1 = res.json(); console.log('1'); console.log(res.json());});
    ;
    console.log('load: ')
    console.log(this.userdata);
  }
  load_userdata_repos():void{
    this.githubService.get_repo(this.username)
    .subscribe(res => {this.userdata = res.json(); console.log('1'); console.log(res.json());});
    ;
    console.log('load: ')
    console.log(this.userdata);
  
  */
}
