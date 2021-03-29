import { createAction, props } from '@ngrx/store';
import { Photo } from '@nx-photos/photo/model';

export const loadPhotos = createAction('[Photo List] Load Photos');
export const loadPhotosSuccess = createAction(
  '[Photo List] Load Photos Success',
  props<{ photos: Photo[] }>()
);
export const loadPhotosError = createAction('[Photo List] Load Photos Error');

export const likePhoto = createAction(
  '[Photo List] Like Photo',
  props<{ id: string }>()
);
export const dislikePhoto = createAction(
  '[Photo List] Dislike Photo',
  props<{ id: string }>()
);

export const updatePhotoSuccess = createAction(
  '[Photo List] Update Photo Success',
  props<{ photo: Photo }>()
);
export const updatePhotoError = createAction('[Photo List] Update Photo Error');
