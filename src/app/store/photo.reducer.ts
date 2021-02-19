import {createReducer, on} from '@ngrx/store';
import {dislikePhoto, likePhoto} from './photo.actions';
import {Photo} from '../photo/photo';

export interface PhotoState {
  [id: string]: Photo;
}

export const photoFeatureKey = 'photo';

export interface PhotoRootState {
  [photoFeatureKey]: PhotoState;
}

const initialState: PhotoState = {
  ['1']: {
    id: '1',
    title: 'Introduction to NgRx',
    url: 'https://ngrx.io/assets/images/ngrx-badge.png',
    likes: 0,
    dislikes: 0,
  },
  ['2']: {
    id: '2',
    title: 'Angular',
    url: 'https://angular.io/assets/images/logos/angular/angular.png',
    likes: 0,
    dislikes: 0,
  }
};

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
  }))
);
