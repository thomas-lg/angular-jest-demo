import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-plus',
	templateUrl: './plus.component.html',
	styleUrls: ['./plus.component.scss'],
})
export class PlusComponent {
	@Input() counter;
	@Output() plus = new EventEmitter();

	canAdd = () => this.counter < 10;

	add = () => {
		if (this.canAdd()) this.plus.emit();
	};
}
