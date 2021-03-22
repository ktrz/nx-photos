import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotoDataAccessModule} from '@nx-photos/photo/data-access';
import {PhotoListModule} from './photo-list/photo-list.module';

@NgModule({
  imports: [CommonModule, PhotoDataAccessModule],
  exports: [PhotoListModule]
})
export class PhotoFeatureListModule {
}
