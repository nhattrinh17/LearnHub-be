import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
  @ApiProperty({ name: 'name', type: String, description: 'Tên tài liệu' })
  name: string;

  @ApiProperty({ name: 'author', type: String, description: 'Tác giả' })
  author: string;

  @ApiProperty({ name: 'description', type: String, description: 'Tên tài liệu' })
  description: string;

  @ApiProperty({ name: 'image', type: String, description: 'Tên tài liệu' })
  image: string;

  @ApiProperty({ name: 'stars', type: Number, description: 'SỐ sao' })
  stars: number;

  @ApiProperty({ name: 'price', type: Number, description: 'Giá' })
  price: number;

  @ApiProperty({ name: 'link', type: String, description: 'Tên tài liệu' })
  link: string;
}
