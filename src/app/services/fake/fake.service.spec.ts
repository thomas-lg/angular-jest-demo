import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { FakeService } from './fake.service';

describe('FakeService', () => {
	let injector: TestBed;
	let service: FakeService;

	beforeEach(() => {
		TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
		injector = getTestBed();
		service = injector.get(FakeService);
	});

	it('should return an Observable<string>', () => {
		service.fake().subscribe((dataBack) => {
			expect(dataBack).toBe('Hello Demo!');
		});
	});
});
