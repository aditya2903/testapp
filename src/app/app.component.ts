import { Component } from "@angular/core";
import { asapScheduler, delay, Observable, of } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'testapp';

  runAsync() {
    setTimeout(() => {
      console.log('settimeout');// macro task
    }, 0);
    this.returnObservable().subscribe(
      console.log// synchronous task of or from operator might be synchronous
    );
    Promise.resolve("promise value").then(console.log);// micro task
    // macro task has lower priority than micro task
  }
  returnObservable(): Observable<string> {
    return of('stream value').pipe(
      delay(0, asapScheduler)
    );
  }
}
