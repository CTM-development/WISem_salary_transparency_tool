import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SalaryOverviewComponent } from './salary-overview/salary-overview.component';
import { SkillTreeComponent } from './skill-tree/skill-tree.component';

const routes: Routes = [
	{ 
		path: 'landing-page', 
		title: 'Salary Overview Tool - Landing Page', 
		component: LandingPageComponent },
	{ 
		path: 'salary-overview',
		title: 'Salary Overview Tool - Salary Overview',
		component: SalaryOverviewComponent },
	{ 
		path: 'skill-tree',
		title: 'Salary Overview Tool - Skill Tree',
		component: SkillTreeComponent },

	{ path: '', redirectTo: '/landing-page', pathMatch: 'full' },

	{ path: '**', component: LandingPageComponent } // wildcard route -> matches any URL
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
