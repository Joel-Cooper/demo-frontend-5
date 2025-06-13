import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);

  increment() {
    return this.counterValue.update(val => val + 1);
  }

  decrement() {
    return this.counterValue.update(val => val - 1);
  }

  reset() {
    return this.counterValue.set(0);
  }
}
