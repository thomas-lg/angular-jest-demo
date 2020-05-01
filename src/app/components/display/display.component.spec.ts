import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayComponent } from './display.component';
import { Component } from '@angular/core';

@Component({
	template: `<app-display [counter]="counter"></app-display> `,
})
class TestHostComponent {
	counter: number;
}

describe('CounterComponent', () => {
	let testHost: TestHostComponent;
	let fixture: ComponentFixture<TestHostComponent>;
	let resultEl: Element;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DisplayComponent, TestHostComponent],
		});
		fixture = TestBed.createComponent(TestHostComponent);
		testHost = fixture.componentInstance;
		resultEl = fixture.nativeElement.querySelector('.result');
		fixture.detectChanges();
	}));

	it('should display counter value if counter > 0', () => {
		testHost.counter = 6;
		fixture.detectChanges();
		expect(resultEl.textContent).toBe('6');
	});

	it('should not display counter value if counter === 0', () => {
		testHost.counter = 0;
		fixture.detectChanges();
		expect(resultEl.textContent).toBe('');
	});
});
