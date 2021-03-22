import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../photo.model';
import { environment } from '../../../../../../apps/fe/photos/src/environments/environment';
import { ApiPhoto } from '@nx-photos/photo/api-model';

@Injectable({
  providedIn: 'root',
})
export class PhotoApiService {
  private apiRoot = environment.apiRoot;

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<ApiPhoto[]>(`${this.apiRoot}/photos`);
  }

  likePhoto(id: string): Observable<Photo> {
    return this.http.put<ApiPhoto>(`${this.apiRoot}/photos/${id}/like`, null);
  }

  dislikePhoto(id: string): Observable<Photo> {
    return this.http.put<ApiPhoto>(
      `${this.apiRoot}/photos/${id}/dislike`,
      null
    );
  }
}
