import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from '@nx-photos/photo/model';

@Component({
  selector: 'app-photo',
  template: `
    <mat-card class="example-card" *ngIf="photo">
      <mat-card-header>
        <mat-card-title>{{ photo.title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <img mat-card-image [src]="photo.url" alt="Intro to NgRx" />
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-icon-button color="warn" (click)="onLike(photo.id)">
          <ng-container *ngIf="photo.likes > 0; else notLikedButton">
            <mat-icon
              [matBadge]="photo.likes"
              matBadgeColor="warn"
              color="primary"
              >thumb_up</mat-icon
            >
          </ng-container>
          <ng-template #notLikedButton>
            <mat-icon color="primary">thumb_up_off_alt</mat-icon>
          </ng-template>
        </button>
        <button mat-icon-button (click)="onDislike(photo.id)">
          <ng-container *ngIf="photo.dislikes > 0; else notDislikedButton">
            <mat-icon
              [matBadge]="photo.dislikes"
              matBadgeColor="warn"
              color="primary"
              >thumb_down</mat-icon
            >
          </ng-container>
          <ng-template #notDislikedButton>
            <mat-icon color="primary">thumb_down_off_alt</mat-icon>
          </ng-template>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  @Input() photo?: Photo;

  @Output() like = new EventEmitter<string>();
  @Output() dislike = new EventEmitter<string>();

  onLike(id: string): void {
    this.like.next(id);
  }

  onDislike(id: string): void {
    this.dislike.next(id);
  }
}
