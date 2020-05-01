import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusComponent } from './minus.component';

describe('MinusComponent', () => {
	let component: MinusComponent;
	let fixture: ComponentFixture<MinusComponent>;
	let buttonEl: Element;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MinusComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MinusComponent);
		component = fixture.componentInstance;
		buttonEl = fixture.nativeElement.querySelector('.button');
		fixture.detectChanges();
	});

	describe('should trigger emit', () => {
		it('if couter === 2', () => {
			component.counter = 2;
			spyOn(component.minus, 'emit');

			buttonEl.dispatchEvent(new Event('click'));
			fixture.detectChanges();

			expect(component.minus.emit).toHaveBeenCalled();
		});
		it('if couter === 9', () => {
			component.counter = 9;
			spyOn(component.minus, 'emit');

			buttonEl.dispatchEvent(new Event('click'));
			fixture.detectChanges();

			expect(component.minus.emit).toHaveBeenCalled();
		});
	});
	describe('should not trigger emit', () => {
		it('if couter === 0', () => {
			component.counter = 0;
			spyOn(component.minus, 'emit');

			buttonEl.dispatchEvent(new Event('click'));
			fixture.detectChanges();

			expect(component.minus.emit).not.toHaveBeenCalled();
		});
	});
});
