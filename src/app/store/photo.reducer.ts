import {createReducer, on} from '@ngrx/store';
import {dislikePhoto, likePhoto, loadPhotosSuccess} from './photo.actions';
import {Photo} from '../photo/photo';

export interface PhotoState {
  [id: string]: Photo;
}

export const photoFeatureKey = 'photo';

export interface PhotoRootState {
  [photoFeatureKey]: PhotoState;
}

const initialState: PhotoState = {};

export const photoReducer = createReducer(
  initialState,
  on(likePhoto, (state, {id}) => ({
    ...state,
    [id]: {
      ...state[id],
      likes: state[id].likes + 1
    }
  })),
  on(dislikePhoto, (state, {id}) => ({
    ...state,
    [id]: {
      ...state[id],
      dislikes: state[id].dislikes + 1
    }
  })),
  on(loadPhotosSuccess, (state, {photos}) => photos.reduce((acc, photo) => ({
    ...acc,
    [photo.id]: photo
  }), {}))
);
