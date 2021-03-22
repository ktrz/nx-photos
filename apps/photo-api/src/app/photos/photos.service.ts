import { Injectable } from '@nestjs/common';
import { Photo, PhotoState } from './photo.model';

const stateToArray = (state: PhotoState): Photo[] =>
  Object.keys(state).map((key) => state[key]);

@Injectable()
export class PhotosService {
  state: PhotoState = {
    ['2d335401-d65e-4059-b8f0-a4816c82086f']: {
      id: '2d335401-d65e-4059-b8f0-a4816c82086f',
      title: 'Nrwl Nx',
      url:
        'https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png',
      likes: 0,
      dislikes: 0,
    },
    ['65a7eb36-f887-4a93-8fe7-38d20c77906f']: {
      id: '65a7eb36-f887-4a93-8fe7-38d20c77906f',
      title: 'Angular',
      url: 'https://angular.io/assets/images/logos/angular/angular.png',
      likes: 0,
      dislikes: 0,
    },
    ['11ecb817-d6fc-49a9-8b53-229fc064da97']: {
      id: '11ecb817-d6fc-49a9-8b53-229fc064da97',
      title: 'Angular',
      url: 'https://docs.nestjs.com/assets/logo-small.svg',
      likes: 0,
      dislikes: 0,
    },
  };

  getPhotos(): Photo[] {
    return stateToArray(this.state);
  }

  likePhoto(id: string): Photo {
    const photo = this.state[id];
    this.state = {
      ...this.state,
      [id]: {
        ...photo,
        likes: photo.likes + 1,
      },
    };
    return this.state[id];
  }

  dislikePhoto(id: string): Photo {
    const photo = this.state[id];
    this.state = {
      ...this.state,
      [id]: {
        ...photo,
        dislikes: photo.dislikes + 1,
      },
    };
    return this.state[id];
  }
}
