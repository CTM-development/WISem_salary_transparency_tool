import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// angular material 
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

// components
import { TopBarComponent } from './top-bar/top-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillTreeComponent } from './skill-tree/skill-tree.component';
import { SalaryOverviewComponent } from './salary-overview/salary-overview.component';
import { SalaryGraphicComponent } from './salary-graphic/salary-graphic.component';
import { SalaryStaticDetailsComponent } from './salary-static-details/salary-static-details.component';
import { SalaryDynamicDetailsComponent } from './salary-dynamic-details/salary-dynamic-details.component';
import { SalaryOverviewInformationComponent } from './salary-overview-information/salary-overview-information.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LandingPageComponent,
    SkillTreeComponent,
    SalaryOverviewComponent,
    SalaryGraphicComponent,
    SalaryStaticDetailsComponent,
    SalaryDynamicDetailsComponent,
    SalaryOverviewInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
		MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { name = "Ed Example"; }
