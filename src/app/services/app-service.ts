import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  mySignal = signal(42)

  modifierLeSignal() {
    this.mySignal.update(old => old + 1)
  }

}
