import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { Observable } from 'rxjs';
import { selectPhotos } from './store/photo.selectors';
import { dislikePhoto, likePhoto, loadPhotos } from './store/photo.actions';
import { Injectable } from '@angular/core';
import { Photo } from '@nx-photos/photo/model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private store: Store<AppState>) {}

  getPhotos(): Observable<Photo[]> {
    return this.store.select(selectPhotos);
  }

  loadPhotos(): void {
    this.store.dispatch(loadPhotos());
  }

  likePhoto(id: string): void {
    this.store.dispatch(likePhoto({ id }));
  }

  dislikePhoto(id: string): void {
    this.store.dispatch(dislikePhoto({ id }));
  }
}
