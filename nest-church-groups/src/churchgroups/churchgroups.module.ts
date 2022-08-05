import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupService } from './group.service';

@Module({
  controllers: [GroupsController],
  providers: [GroupService]
})
export class ChurchgroupsModule {}
