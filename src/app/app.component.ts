import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectPhoto} from './store/photo.selectors';
import {dislikePhoto, likePhoto} from './store/photo.actions';
import {AppState} from './store/app.state';

@Component({
  selector: 'app-root',
  template: `
    <div class="photos">
      <app-photo
        class="photo"
        [photo]="photo$ | async"
        (like)="onLike($event)"
        (dislike)="onDislike($event)"
      ></app-photo>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photo$ = this.store.select(selectPhoto, {id: '1'});

  constructor(private store: Store<AppState>) {
  }

  onLike(id: string): void {
    this.store.dispatch(likePhoto({id}));
  }

  onDislike(id: string): void {
    this.store.dispatch(dislikePhoto({id}));
  }
}
