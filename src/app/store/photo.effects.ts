import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PhotoService} from '../api/photo.service';
import {Injectable} from '@angular/core';
import {loadPhotos, loadPhotosError, loadPhotosSuccess} from './photo.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PhotoEffects {
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      switchMap(() => this.photoService.getPhotos().pipe(
        map(photos => loadPhotosSuccess({photos})),
        catchError(() => of(loadPhotosError()))
      ))
    )
  );

  constructor(private actions$: Actions, private photoService: PhotoService) {
  }
}
