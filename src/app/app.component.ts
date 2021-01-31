import {Component} from '@angular/core';
import {Photo} from './photo/photo';

@Component({
  selector: 'app-root',
  template: `
    <div class="photos">
      <app-photo class="photo" [photo]="photo" (like)="onLike()"></app-photo>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photo: Photo = {
    title: 'Introduction to NgRx',
    url: 'https://ngrx.io/assets/images/ngrx-badge.png',
    likes: 0
  };

  onLike(): void {
    this.photo.likes += 1;
  }
}
