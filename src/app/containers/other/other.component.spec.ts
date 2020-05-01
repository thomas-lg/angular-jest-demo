import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherComponent } from './other.component';
import { FakeService } from './../../services/fake/fake.service';
import { of } from 'rxjs';

describe('OtherComponent', () => {
	let component: OtherComponent;
	let fixture: ComponentFixture<OtherComponent>;
	let fakeService: FakeService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OtherComponent],
			providers: [FakeService],
		});
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OtherComponent);
		component = fixture.componentInstance;
		fakeService = TestBed.get(FakeService);
		spyOn(fakeService, 'fake').and.returnValue(of('Hello Test'));
		fixture.detectChanges();
	});

	it('should create', () => {
		component.ngOnInit();
		expect(fakeService.fake).toHaveBeenCalled();
	});
});
