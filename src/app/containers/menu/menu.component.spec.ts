import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
	let component: MenuComponent;
	let fixture: ComponentFixture<MenuComponent>;
	let aEl: Element;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MenuComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should have 3 elem inthe menu', () => {
		const items: NodeList = fixture.nativeElement.querySelectorAll('a[routerLink]');
		expect(items.length).toBe(3);
	});
});
