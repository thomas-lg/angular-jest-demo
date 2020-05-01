import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';
import { PlusComponent } from 'src/app/components/plus/plus.component';
import { MinusComponent } from 'src/app/components/minus/minus.component';
import { EvenOddComponent } from 'src/app/components/even-odd/even-odd.component';
import { DisplayComponent } from 'src/app/components/display/display.component';

@Component({
	selector: 'app-minus',
	template: '',
})
class PlusStubComponent {
	@Input() counter: number;
}

describe('CounterComponent', () => {
	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CounterComponent,
				PlusComponent,
				MinusComponent,
				DisplayComponent,
				EvenOddComponent,
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
