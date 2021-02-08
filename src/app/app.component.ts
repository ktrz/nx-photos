import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectPhoto} from './store/photo.selectors';
import {dislikePhoto, likePhoto} from './store/photo.actions';
import {AppState} from './store/app.state';

@Component({
  selector: 'app-root',
  template: `
    <div class="photos">
      <app-photo class="photo" [photo]="photo$ | async" (like)="onLike()" (dislike)="onDislike()"></app-photo>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photo$ = this.store.pipe(select(selectPhoto));

  constructor(private store: Store<AppState>) {
  }

  onLike(): void {
    this.store.dispatch(likePhoto());
  }

  onDislike(): void {
    this.store.dispatch(dislikePhoto());
  }
}
