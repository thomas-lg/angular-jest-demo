import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-minus',
	templateUrl: './minus.component.html',
	styleUrls: ['./minus.component.scss'],
})
export class MinusComponent {
	@Input() counter: number;
	@Output() minus = new EventEmitter();

	canSub = () => this.counter > 0;

	sub = () => {
		if (this.canSub()) this.minus.emit();
	};
}
