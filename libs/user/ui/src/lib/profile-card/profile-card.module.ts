import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileCardComponent} from './profile-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ProfileCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ProfileCardComponent]
})
export class ProfileCardModule {
}
