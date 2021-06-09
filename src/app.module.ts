import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpendingListModule } from './modules/spending-list/spending-list.module';
import { SpendingListiService } from './modules/spending-listi/spending-listi.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [SpendingListModule, UserModule],
  controllers: [AppController],
  providers: [AppService, SpendingListiService],
})
export class AppModule {}
