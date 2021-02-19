import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PhotoService} from '../api/photo.service';
import {Injectable} from '@angular/core';
import {
  dislikePhoto,
  likePhoto,
  loadPhotos,
  loadPhotosError,
  loadPhotosSuccess,
  updatePhotoError,
  updatePhotoSuccess
} from './photo.actions';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PhotoEffects {
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      switchMap(() => this.photoService.getPhotos().pipe(
        map(photos => loadPhotosSuccess({photos})),
        catchError(() => [loadPhotosError()])
      ))
    )
  );

  likePhoto$ = createEffect(() => this.actions$.pipe(
    ofType(likePhoto),
    switchMap(({id}) => this.photoService.likePhoto(id).pipe(
      map(photo => updatePhotoSuccess({photo})),
      catchError(() => [updatePhotoError()])
    ))
  ));

  dislikePhoto$ = createEffect(() => this.actions$.pipe(
    ofType(dislikePhoto),
    switchMap(({id}) => this.photoService.dislikePhoto(id).pipe(
      map(photo => updatePhotoSuccess({photo})),
      catchError(() => [updatePhotoError()])
    ))
  ));

  pollPhotos$ = createEffect(() => this.actions$.pipe(
    ofType(loadPhotosSuccess, loadPhotosError),
    switchMap(() => of(loadPhotos()).pipe(delay(5000)))
  ));

  constructor(private actions$: Actions, private photoService: PhotoService) {
  }
}
