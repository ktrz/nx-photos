import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoApiModule } from './api/photo-api.module';
import { StoreModule } from '@ngrx/store';
import { photoReducer } from './store/photo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PhotoEffects } from './store/photo.effects';

@NgModule({
  imports: [
    CommonModule,
    PhotoApiModule,
    StoreModule.forFeature('photo', photoReducer),
    EffectsModule.forFeature([PhotoEffects]),
  ],
})
export class PhotoDataAccessModule {}
