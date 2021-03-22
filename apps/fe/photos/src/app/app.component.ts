import {Component, OnInit} from '@angular/core';
import {PhotoService} from '@nx-photos/photo/data-access';
import {Photo} from '@nx-photos/photo/model';

@Component({
  selector: 'app-root',
  template: `
    <div class="photos">
      <app-photo
        *ngFor="let photo of photos$ | async; trackBy: trackById"
        [photo]="photo"
        (like)="onLike($event)"
        (dislike)="onDislike($event)"
        class="photo"
      ></app-photo>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  photos$ = this.photoService.getPhotos();

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.loadPhotos();
  }

  onLike(id: string): void {
    this.photoService.likePhoto(id);
  }

  onDislike(id: string): void {
    this.photoService.dislikePhoto(id);
  }

  trackById(index: number, item: Photo): string {
    return item.id;
  }
}
