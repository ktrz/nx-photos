import {createAction, props} from '@ngrx/store';
import {Photo} from '../photo/photo';

export const loadPhotos = createAction('[Photo List] Load Photos');
export const loadPhotosSuccess = createAction('[Photo List] Load Photos Success', props<{photos: Photo[]}>());
export const loadPhotosError = createAction('[Photo List] Load Photos Error');

export const likePhoto = createAction('[Photo List] Like Photo', props<{id: string}>());
export const dislikePhoto = createAction('[Photo List] Dislike Photo', props<{id: string}>());
