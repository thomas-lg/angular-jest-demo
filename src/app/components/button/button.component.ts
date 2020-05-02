import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input() counter;
	@Input() value: number;
	@Output() change = new EventEmitter();

	inLimit = () => this.counter + this.value < 10 && this.counter + this.value > 0;

	modify = () => {
		if (this.inLimit()) {
			this.change.emit(this.value);
		} else {
			this.change.emit(this.value < 0 ? -this.counter : 10 - this.counter);
		}
	};
}
