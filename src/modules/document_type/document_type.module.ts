import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentTypeRepository } from './repository/document_type.repository';
import { Document_types } from '../../entities/Document_types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Document_types])],
  providers: [DocumentTypeRepository],
  exports: [DocumentTypeRepository],
})
export class DocumentTypeModule {}
