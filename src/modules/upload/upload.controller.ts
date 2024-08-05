import { Controller, Post, UseInterceptors, UploadedFile, HttpException, Body, Req, Res, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FirebaseService } from 'src/utils';
import { Public } from '../auth/decorators';
import { UploadedFilesCustomer } from 'src/custom-decorator';
// @ApiBearerAuth()
@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Public()
  @Post('image')
  async uploadImage(@UploadedFilesCustomer() files: any[], @Query('folder') folder: string) {
    try {
      if (!files.length) {
        throw new HttpException('file not found', 500);
      }
      const paths = await Promise.all(files.map((file) => this.firebaseService.uploadImageToStorage(file, folder ? `image/${folder}` : 'image/client')));
      return {
        data: paths,
      };
    } catch (error) {
      console.error('Error uploading', error);
    }
  }

  @Public()
  @Post('file')
  async uploadFile(@UploadedFilesCustomer() files: any[], @Query('folder') folder: string) {
    try {
      if (!files.length) {
        throw new HttpException('file not found', 500);
      }
      const paths = await Promise.all(files.map((file) => this.firebaseService.uploadImageToStorage(file, folder ? `file/${folder}` : 'file/client')));
      return {
        data: paths,
      };
    } catch (error) {
      console.error('Error uploading', error);
    }
  }
}
