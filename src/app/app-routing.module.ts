import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './containers/counter/counter.component';
import { OtherComponent } from './containers/other/other.component';

const routes: Routes = [
	{ path: 'counter', component: CounterComponent },
	{ path: 'other', component: OtherComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
