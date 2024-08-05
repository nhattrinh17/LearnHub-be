import { Inject, Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { DocumentRepositoryInterface } from './interface/document.interface';
import { messageResponse } from 'src/constants';
import { PaginationDto } from 'src/custom-decorator';
import { Op } from 'sequelize';

@Injectable()
export class DocumentService {
  constructor(
    @Inject('DocumentRepositoryInterface')
    private readonly documentRepository: DocumentRepositoryInterface,
  ) {}
  create(dto: CreateDocumentDto) {
    if (!dto.author || !dto.name || !dto.image || !dto.description) throw Error(messageResponse.system.missingData);
    return this.documentRepository.create(dto);
  }

  findAll(pagination: PaginationDto, search: string, sort: string, typeSort: string) {
    const filter: any = {};
    if (search) filter.name = { [Op.like]: `%${search.trim()}%` };
    return this.documentRepository.findAll(filter, {
      ...pagination,
      sort,
      typeSort,
    });
  }

  findOne(id: number) {
    return this.documentRepository.findOneById(id);
  }

  async update(id: number, dto: UpdateDocumentDto) {
    const document = await this.findOne(id);
    if (!document) throw Error(messageResponse.system.idInvalid);
    return this.documentRepository.findByIdAndUpdate(id, dto);
  }

  remove(id: number) {
    return this.documentRepository.softDelete(id);
  }
}
