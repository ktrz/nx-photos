import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoUiModule } from '@nx-photos/photo/ui';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [CommonModule, PhotoUiModule],
  exports: [PhotoListComponent],
})
export class PhotoListModule {}
