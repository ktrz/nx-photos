import {Controller, Get, Param, Put} from '@nestjs/common';
import {PhotosService} from './photos.service';
import {Photo} from './photo.model';

@Controller('photos')
export class PhotosController {

  constructor(private photoService: PhotosService) {
  }

  @Get()
  findAll(): Photo[] {
    return this.photoService.getPhotos();
  }

  @Put(':photoId/like')
  likePhoto(@Param() params: {photoId: string}): Photo {
    return this.photoService.likePhoto(params.photoId);
  }

  @Put(':photoId/dislike')
  dislikePhoto(@Param() params: {photoId: string}): Photo {
    return this.photoService.dislikePhoto(params.photoId);
  }
}
