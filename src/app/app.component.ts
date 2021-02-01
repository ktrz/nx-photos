import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectPhoto} from './store/photo.selectors';
import {likePhoto} from './store/photo.actions';

@Component({
  selector: 'app-root',
  template: `
    <div class="photos">
      <app-photo class="photo" [photo]="photo$ | async" (like)="onLike()"></app-photo>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photo$ = this.store.pipe(select(selectPhoto));

  constructor(private store: Store<any>) {
  }

  onLike(): void {
    this.store.dispatch(likePhoto());
  }
}
