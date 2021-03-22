import { createReducer, on } from '@ngrx/store';
import { loadPhotosSuccess, updatePhotoSuccess } from './photo.actions';
import { Photo } from '@nx-photos/photo/model';

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
  on(updatePhotoSuccess, (state, { photo }) => ({
    ...state,
    [photo.id]: photo,
  })),
  on(loadPhotosSuccess, (state, { photos }) =>
    photos.reduce(
      (acc, photo) => ({
        ...acc,
        [photo.id]: photo,
      }),
      {}
    )
  )
);
