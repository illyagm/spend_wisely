import { Module } from '@nestjs/common';
import { SpendingListController } from './controller/spending-list.controller';
import { SpendingListService } from './service/spending-list.service';

@Module({
  controllers: [SpendingListController],
  providers: [SpendingListService]
})
export class SpendingListModule {}
