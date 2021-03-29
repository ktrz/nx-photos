import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('@nx-photos/photo/feature-list').then(
        (m) => m.PhotoFeatureListModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('@nx-photos/user/feature-profile').then(
        (m) => m.UserFeatureProfileModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
