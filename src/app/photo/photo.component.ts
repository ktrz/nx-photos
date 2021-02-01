import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Photo} from './photo';

@Component({
  selector: 'app-photo',
  template: `
    <mat-card class="example-card" *ngIf="photo">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{photo.title}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <img mat-card-image [src]="photo.url" alt="Intro to NgRx">
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-icon-button color="warn" (click)="onLike()">
          <ng-container *ngIf="photo.likes as likes; else notLikedButton">
            <mat-icon [matBadge]="likes" matBadgeColor="warn" color="primary">favorite</mat-icon>
          </ng-container>
          <ng-template #notLikedButton>
            <mat-icon color="primary">favorite_outline</mat-icon>
          </ng-template>
        </button>
      </mat-card-actions>
    </mat-card>

  `,
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input() photo?: Photo | null;

  @Output() like = new EventEmitter();

  onLike(): void {
    this.like.next();
  }
}
