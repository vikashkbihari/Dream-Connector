import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent} from './nav.component';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {RouterModule}  from '@angular/router';
import { GithubService } from './github/github.service';
import { integration} from './integrationList/integration-list.component';
import { businessList} from './businessList/business-list.component';
import { TeamComponent } from './team/team.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { PrivacyService } from './privacy.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    businessList,
    integration, 
    TeamComponent, ProductInfoComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'integration', component: integration},
      {path:'business', component: businessList},
      {path:'team', component: TeamComponent},
    ])
  ],
  providers: [GithubService,PrivacyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
