import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-even-odd',
	templateUrl: './even-odd.component.html',
	styleUrls: ['./even-odd.component.scss'],
})
export class EvenOddComponent implements OnChanges {
	type: string;
	@Input() counter: number;

	ngOnChanges(changes: SimpleChanges): void {
		this.type =
			this.counter === 0 ? 'min' : this.counter === 10 ? 'max' : this.counter % 2 ? 'odd' : 'even';
	}
}
