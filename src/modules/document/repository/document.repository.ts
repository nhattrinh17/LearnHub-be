import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseRepositoryAbstract } from 'src/base';
import { DocumentModel } from 'src/models';
import { DocumentRepositoryInterface } from '../interface/document.interface';
@Injectable()
export class DocumentRepository extends BaseRepositoryAbstract<DocumentModel> implements DocumentRepositoryInterface {
  constructor(@InjectModel(DocumentModel) private readonly documentModel: typeof DocumentModel) {
    super(DocumentModel);
  }
}
