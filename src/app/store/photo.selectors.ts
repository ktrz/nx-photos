import {createSelector} from '@ngrx/store';
import {PhotoState} from './photo.reducer';

const selectPhotoFeature = (state: { photo: PhotoState }) => state.photo;

export const selectPhotos = createSelector(selectPhotoFeature, state => Object.keys(state).map(key => state[key]));

export const selectPhoto = createSelector(selectPhotoFeature, (state: PhotoState, props: {id: string}) => state[props.id]);
