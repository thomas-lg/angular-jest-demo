import { Component } from '@angular/core';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
	counter: number = 0;

	add = () => this.counter++;
	sub = () => this.counter--;
}
