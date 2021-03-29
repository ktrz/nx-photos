import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ProfileViewComponent} from './profile-view/profile-view.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfileViewComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserFeatureProfileModule {
}
