import {createSelector} from '@ngrx/store';
import {PhotoState} from './photo.reducer';

export const selectPhoto = createSelector((state: { photo: PhotoState }) => state.photo, likes => ({
    title: 'Introduction to NgRx',
    url: 'https://ngrx.io/assets/images/ngrx-badge.png',
    likes
  })
);
