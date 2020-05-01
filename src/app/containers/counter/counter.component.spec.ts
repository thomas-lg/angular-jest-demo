import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { MinusComponent } from 'src/app/components/minus/minus.component';
import { PlusComponent } from 'src/app/components/plus/plus.component';
import { CounterComponent } from './counter.component';

@Component({
	selector: 'app-even-odd',
	template: '',
})
class EvenOddStubComponent {
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
				EvenOddStubComponent,
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
