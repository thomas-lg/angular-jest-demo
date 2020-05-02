import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvenOddComponent } from './even-odd.component';

@Component({
	template: `<app-even-odd [counter]="counter"></app-even-odd> `,
})
class TestHostComponent {
	counter: number;
}

describe('EvenOddComponent', () => {
	let testHost: TestHostComponent;
	let fixture: ComponentFixture<TestHostComponent>;
	let labelEl: Element;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EvenOddComponent, TestHostComponent],
		});
		fixture = TestBed.createComponent(TestHostComponent);
		testHost = fixture.componentInstance;
		labelEl = fixture.nativeElement.querySelector('.label');
		fixture.detectChanges();
	}));

	describe('should display odd when', () => {
		it('counter is equal to 3', () => {
			testHost.counter = 3;
			fixture.detectChanges();
			expect(labelEl.textContent).toEqual('odd');
		});
		it('counter is equal to 7', () => {
			testHost.counter = 7;
			fixture.detectChanges();
			expect(labelEl.textContent).toEqual('odd');
		});
	});

	describe('should display even when', () => {
		it('counter is equal to 2', () => {
			testHost.counter = 2;
			fixture.detectChanges();
			expect(labelEl.textContent).toEqual('even');
		});
	});

	describe('should display max when', () => {
		it('counter is equal to 10', () => {
			testHost.counter = 10;
			fixture.detectChanges();
			expect(labelEl.textContent).toEqual('max');
		});
	});

	describe('should display min when', () => {
		it('counter is equal to 0', () => {
			testHost.counter = 0;
			fixture.detectChanges();
			expect(labelEl.textContent).toEqual('min');
		});
	});
});
