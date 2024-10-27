import { Module } from '@nestjs/common';
import { RepositoryHelper } from './repository.helper';

@Module({
  providers: [RepositoryHelper],
  exports: [RepositoryHelper],
})
export class UtilsModule {}
