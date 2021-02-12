import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectPhotos} from './store/photo.selectors';
import {dislikePhoto, likePhoto} from './store/photo.actions';
import {AppState} from './store/app.state';
import {Photo} from './photo/photo';

@Component({
  selector: 'app-root',
  template: `
    <div class="photos">
      <app-photo
        *ngFor="let photo of photos$ | async; trackBy: trackById"
        [photo]="photo"
        (like)="onLike($event)"
        (dislike)="onDislike($event)"
        class="photo"
      ></app-photo>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos$ = this.store.select(selectPhotos);

  constructor(private store: Store<AppState>) {
  }

  onLike(id: string): void {
    this.store.dispatch(likePhoto({id}));
  }

  onDislike(id: string): void {
    this.store.dispatch(dislikePhoto({id}));
  }

  trackById(index: number, item: Photo): string {
    return item.id;
  }
}
