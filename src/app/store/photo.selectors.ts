import {createSelector} from '@ngrx/store';
import {PhotoState} from './photo.reducer';

const selectPhotoFeature = (state: { photo: PhotoState }) => state.photo;

export const selectPhoto = createSelector(selectPhotoFeature, (state: PhotoState, props: {id: string}) => state[props.id]);
