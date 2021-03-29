import { createFeatureSelector, createSelector } from '@ngrx/store';
import { photoFeatureKey, PhotoRootState, PhotoState } from './photo.reducer';

const selectPhotoFeature = createFeatureSelector<PhotoRootState, PhotoState>(
  photoFeatureKey
);

export const selectPhotos = createSelector(selectPhotoFeature, (state) =>
  Object.keys(state).map((key) => state[key])
);

export const selectPhoto = createSelector(
  selectPhotoFeature,
  (state: PhotoState, props: { id: string }) => state[props.id]
);
