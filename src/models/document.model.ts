import { BeforeCount, BeforeFind, BeforeSave, Column, Model, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Status, TypeUser } from 'src/constants';
import { addConditionNotDelete } from '.';

@Table({
  tableName: 'Documents',
  timestamps: true,
  indexes: [{ name: 'name_index', fields: ['name'] }],
})
export class DocumentModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  author: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
  })
  image: string;

  @Column({
    type: DataType.SMALLINT,
  })
  stars: number;

  @Column({
    type: DataType.DOUBLE,
  })
  price: number;

  @Column({
    type: DataType.TEXT,
  })
  link: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isDeleted: boolean;

  @Column({ type: DataType.DATE })
  deletedAt: Date;

  @BeforeFind
  @BeforeCount
  @BeforeSave
  static async BeforeFindHook(options: any) {
    addConditionNotDelete(options);
  }
}
