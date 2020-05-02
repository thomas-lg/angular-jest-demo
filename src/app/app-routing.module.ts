import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './containers/counter/counter.component';
import { HomeComponent } from './containers/home/home.component';
import { AsyncComponent } from './containers/async/async.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
	{ path: 'home', component: HomeComponent },
	{ path: 'counter', component: CounterComponent },
	{ path: 'async', component: AsyncComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
