import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { CounterComponent } from './counter.component';

// #region Stub
@Component({
	selector: 'app-button',
	template: '',
})
class ButtonStubComponent {
	@Input() counter: number;
	@Input() value: number;
}

@Component({
	selector: 'app-even-odd',
	template: '',
})
class EvenOddStubComponent {
	@Input() counter: number;
}
// #endregion

describe('CounterComponent', () => {
	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CounterComponent, ButtonStubComponent, DisplayComponent, EvenOddStubComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});
	describe('should', () => {
		it('increment counter', () => {
			component.counter = 4;
			component.modify(1);
			expect(component.counter).toBe(5);
		});
		it('increment counter by 5', () => {
			component.counter = 4;
			component.modify(5);
			expect(component.counter).toBe(9);
		});
		it('decrement counter', () => {
			component.counter = 4;
			component.modify(-1);
			expect(component.counter).toBe(3);
		});
	});
});
