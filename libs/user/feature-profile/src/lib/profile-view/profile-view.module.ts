import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileViewComponent} from './profile-view.component';
import {UserUiModule} from '@nx-photos/user/ui';


@NgModule({
  declarations: [ProfileViewComponent],
  imports: [
    CommonModule,
    UserUiModule
  ],
  exports: [ProfileViewComponent]
})
export class ProfileViewModule {
}
