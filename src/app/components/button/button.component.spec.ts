import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
	let component: ButtonComponent;
	let fixture: ComponentFixture<ButtonComponent>;
	let buttonEl: Element;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ButtonComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ButtonComponent);
		component = fixture.componentInstance;
		buttonEl = fixture.nativeElement.querySelector('.button');
		fixture.detectChanges();
	});

	describe('should trigger emit with value', () => {
		it('if counter === 5 and value === 2 then ', () => {
			component.counter = 5;
			component.value = 2;
			spyOn(component.change, 'emit');

			buttonEl.dispatchEvent(new Event('click'));
			fixture.detectChanges();

			expect(component.change.emit).toHaveBeenCalledWith(2);
		});
		it('if counter === 5 and value === -2 then', () => {
			component.counter = 5;
			component.value = -2;
			spyOn(component.change, 'emit');

			buttonEl.dispatchEvent(new Event('click'));
			fixture.detectChanges();

			expect(component.change.emit).toHaveBeenCalledWith(-2);
		});

		describe('should trigger emit with modified value', () => {
			it('if couter === 10 and value === 3', () => {
				component.counter = 10;
				component.value = 3;
				spyOn(component.change, 'emit');

				buttonEl.dispatchEvent(new Event('click'));
				fixture.detectChanges();

				expect(component.change.emit).toHaveBeenCalledWith(0);
			});
			it('if couter === 7 and value === 8', () => {
				component.counter = 7;
				component.value = 8;
				spyOn(component.change, 'emit');

				buttonEl.dispatchEvent(new Event('click'));
				fixture.detectChanges();

				expect(component.change.emit).toHaveBeenCalledWith(3);
			});
			it('if couter === 0 and value === -2', () => {
				component.counter = 0;
				component.value = -2;
				spyOn(component.change, 'emit');

				buttonEl.dispatchEvent(new Event('click'));
				fixture.detectChanges();

				expect(component.change.emit).toHaveBeenCalledWith(-0);
			});
			it('if couter === 7 and value === -8', () => {
				component.counter = 7;
				component.value = -8;
				spyOn(component.change, 'emit');

				buttonEl.dispatchEvent(new Event('click'));
				fixture.detectChanges();

				expect(component.change.emit).toHaveBeenCalledWith(-7);
			});
		});
	});
});
