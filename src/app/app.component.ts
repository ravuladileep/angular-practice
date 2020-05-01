import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-practice';
  source$ = fromEvent(document, 'mousemove')
    .pipe(
      map((e: MouseEvent) => {
        return {
          x: e.clientX,
          y: e.clientY,
        };
      })
    )
    .subscribe((res) => {
      const elem: HTMLElement = document.getElementById('circle');
      elem.setAttribute('style', `top: ${res.y}px; left: ${res.x}px;`);
    });
}
