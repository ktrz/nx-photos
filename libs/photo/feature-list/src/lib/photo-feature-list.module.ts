import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDataAccessModule } from '@nx-photos/photo/data-access';
import { PhotoListModule } from './photo-list/photo-list.module';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent,
  },
];

@NgModule({
  imports: [CommonModule, PhotoDataAccessModule, RouterModule.forChild(routes)],
  exports: [PhotoListModule],
})
export class PhotoFeatureListModule {}
