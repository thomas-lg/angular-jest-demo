import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/services/fake/fake.service';

@Component({
	selector: 'app-other',
	templateUrl: './other.component.html',
	styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {
	label: string;

	constructor(private fakeService: FakeService) {}

	ngOnInit() {
		this.fakeService.fake().subscribe((label: string) => (this.label = label));
	}
}
