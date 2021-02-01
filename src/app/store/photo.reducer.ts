import {createReducer, on} from '@ngrx/store';
import {dislikePhoto, likePhoto} from './photo.actions';

export type PhotoState = number;

const initialState: PhotoState = 0;

export const photoReducer = createReducer(
  initialState,
  on(likePhoto, state => state + 1),
  on(dislikePhoto, state => state - 1)
);
