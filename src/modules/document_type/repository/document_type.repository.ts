import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Document_types } from '../../../entities/Document_types';

@Injectable()
export class DocumentTypeRepository extends Repository<Document_types> {
  constructor(dataSource: DataSource) {
    super(Document_types, dataSource.createEntityManager());
  }
}
