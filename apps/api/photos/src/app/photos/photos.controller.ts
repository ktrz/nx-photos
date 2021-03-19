import { Controller, Get, Param, Put } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { ApiPhoto } from '@nx-photos/photo/api-model';

@Controller('photos')
export class PhotosController {
  constructor(private photoService: PhotosService) {}

  @Get()
  findAll(): ApiPhoto[] {
    return this.photoService.getPhotos();
  }

  @Put(':photoId/like')
  likePhoto(@Param() params: { photoId: string }): ApiPhoto {
    return this.photoService.likePhoto(params.photoId);
  }

  @Put(':photoId/dislike')
  dislikePhoto(@Param() params: { photoId: string }): ApiPhoto {
    return this.photoService.dislikePhoto(params.photoId);
  }
}
