import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComponent } from './async.component';
import { FakeService } from 'src/app/services/fake/fake.service';
import { of } from 'rxjs';

describe('AsyncComponent', () => {
	let component: AsyncComponent;
	let fixture: ComponentFixture<AsyncComponent>;
	let fakeService: FakeService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AsyncComponent],
			providers: [FakeService],
		});
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AsyncComponent);
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
