import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Search } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiOperationCustom, Pagination, PaginationDto } from 'src/custom-decorator';

@ApiTags('Document')
@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @ApiOperationCustom('Document', 'post')
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentService.create(createDocumentDto);
  }

  @Get()
  @ApiOperationCustom('Document', 'get')
  findAll(@Pagination() pagination: PaginationDto, @Query('search') search: string, @Query('sort') sort: string, @Query('typeSort') typeSort: string) {
    return this.documentService.findAll(pagination, search, sort, typeSort);
  }

  @Get(':id')
  @ApiOperationCustom('Document', 'get', true, true)
  findOne(@Param('id') id: string) {
    return this.documentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperationCustom('Document', 'patch')
  update(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentService.update(+id, updateDocumentDto);
  }

  // @Delete(':id')
  // @ApiOperationCustom("Document", "delete")
  // remove(@Param('id') id: string) {
  //   return this.documentService.remove(+id);
  // }
}
