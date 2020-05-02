import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { EvenOddComponent } from './components/even-odd/even-odd.component';
import { ButtonComponent } from './components/button/button.component';
import { CounterComponent } from './containers/counter/counter.component';
import { HomeComponent } from './containers/home/home.component';
import { MenuComponent } from './containers/menu/menu.component';
import { AsyncComponent } from './containers/async/async.component';

@NgModule({
	declarations: [
		AppComponent,
		DisplayComponent,
		ButtonComponent,
		MenuComponent,
		EvenOddComponent,
		HomeComponent,
		CounterComponent,
		AsyncComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
