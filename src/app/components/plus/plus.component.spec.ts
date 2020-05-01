import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusComponent } from './plus.component';

describe('PlusComponent', () => {
	let component: PlusComponent;
	let fixture: ComponentFixture<PlusComponent>;
	let buttonEl: Element;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PlusComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlusComponent);
		component = fixture.componentInstance;
		buttonEl = fixture.nativeElement.querySelector('.button');
		fixture.detectChanges();
	});

	describe('should trigger emit', () => {
		it('if couter === 2', () => {
			component.counter = 2;
			spyOn(component.plus, 'emit');

			buttonEl.dispatchEvent(new Event('click'));
			fixture.detectChanges();

			expect(component.plus.emit).toHaveBeenCalled();
		});
		it('if couter === 9', () => {
			component.counter = 9;
			spyOn(component.plus, 'emit');

			buttonEl.dispatchEvent(new Event('click'));
			fixture.detectChanges();

			expect(component.plus.emit).toHaveBeenCalled();
		});
	});
	describe('should not trigger emit', () => {
		it('if couter === 10', () => {
			component.counter = 10;
			spyOn(component.plus, 'emit');

			buttonEl.dispatchEvent(new Event('click'));
			fixture.detectChanges();

			expect(component.plus.emit).not.toHaveBeenCalled();
		});
	});
});
