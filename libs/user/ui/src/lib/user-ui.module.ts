import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileCardModule} from './profile-card/profile-card.module';

@NgModule({
  imports: [CommonModule, ProfileCardModule],
  exports: [ProfileCardModule]
})
export class UserUiModule {}
