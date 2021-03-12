import {Controller, Get} from '@nestjs/common';
import {PhotosService} from './photos.service';

@Controller('photos')
export class PhotosController {

  constructor(private photoService: PhotosService) {
  }

  @Get()
  findAll(): any[] {
    return this.photoService.getPhotos();
  }
}
