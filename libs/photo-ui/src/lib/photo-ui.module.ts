import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  imports: [CommonModule, PhotoModule],
  exports: [PhotoModule],
})
export class PhotoUiModule {}
