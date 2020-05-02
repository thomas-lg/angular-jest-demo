import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class FakeService {
	constructor() {}

	fake = () => of('Hello Demo!').pipe(delay(2000));
}
