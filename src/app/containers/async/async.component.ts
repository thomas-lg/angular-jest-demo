import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/services/fake/fake.service';

@Component({
	selector: 'app-async',
	templateUrl: './async.component.html',
	styleUrls: ['./async.component.scss'],
})
export class AsyncComponent implements OnInit {
	label: string;

	constructor(private fakeService: FakeService) {}

	ngOnInit() {
		this.fakeService.fake().subscribe((label: string) => (this.label = label));
	}
}
