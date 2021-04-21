import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ProfileViewComponent} from './profile-view/profile-view.component';
import {ProfileViewModule} from './profile-view/profile-view.module';

const routes: Route[] = [
  {
    path: '',
    component: ProfileViewComponent
  }
]

@NgModule({
  imports: [CommonModule, ProfileViewModule, RouterModule.forChild(routes)],
})
export class UserFeatureProfileModule {
}
