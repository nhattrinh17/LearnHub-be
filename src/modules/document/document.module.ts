import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DocumentModel } from 'src/models';
import { DocumentRepository } from './repository/document.repository';

@Module({
  imports: [SequelizeModule.forFeature([DocumentModel])],
  controllers: [DocumentController],
  providers: [
    DocumentService,
    {
      provide: 'DocumentRepositoryInterface',
      useClass: DocumentRepository,
    },
  ],
})
export class DocumentModule {}
