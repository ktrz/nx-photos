import {createSelector} from '@ngrx/store';
import {PhotoState} from './photo.reducer';

const selectPhotoFeature = (state: { photo: PhotoState }) => state.photo;

export const selectPhoto = createSelector(selectPhotoFeature, likes => ({
    title: 'Introduction to NgRx',
    url: 'https://ngrx.io/assets/images/ngrx-badge.png',
    likes
  })
);
