import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './containers/counter/counter.component';
import { PlusComponent } from './components/plus/plus.component';
import { MinusComponent } from './components/minus/minus.component';
import { MenuComponent } from './containers/menu/menu.component';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent,
		PlusComponent,
		MinusComponent,
		MenuComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
