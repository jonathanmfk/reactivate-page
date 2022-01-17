import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
	{ path: 'inicio', component: HomeComponent },
	{ path: 'inicio', component: HomeComponent },
	{ path: 'inicio', component: HomeComponent },
	{ path: 'inicio', component: HomeComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
