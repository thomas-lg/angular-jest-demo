import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlusComponent } from './components/plus/plus.component';
import { MinusComponent } from './components/minus/minus.component';
import { MenuComponent } from './containers/menu/menu.component';
import { DisplayComponent } from './components/display/display.component';
import { EvenOddComponent } from './components/even-odd/even-odd.component';
import { OtherComponent } from './containers/other/other.component';
import { CounterComponent } from './containers/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		DisplayComponent,
		PlusComponent,
		MinusComponent,
		MenuComponent,
		EvenOddComponent,
		OtherComponent,
		CounterComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
