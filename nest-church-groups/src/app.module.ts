import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChurchgroupsModule } from './churchgroups/churchgroups.module';

@Module({
  imports: [ChurchgroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
