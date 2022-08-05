import { Controller, Get, NotFoundException } from "@nestjs/common"
import { GroupService } from "./group.service"

@Controller("groups")
export class GroupsController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  getGroups() {
    let groups = this.groupService.findAllGroups()
    if (!groups) {
      throw new NotFoundException("Groups not found")
    }
    return groups
  }
}
