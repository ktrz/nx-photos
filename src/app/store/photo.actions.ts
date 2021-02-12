import {createAction, props} from '@ngrx/store';

export const likePhoto = createAction('[Photo List] Like Photo', props<{id: string}>());
export const dislikePhoto = createAction('[Photo List] Dislike Photo', props<{id: string}>());
