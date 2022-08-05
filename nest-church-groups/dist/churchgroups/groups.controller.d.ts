import { GroupService } from "./group.service";
export declare class GroupsController {
    private readonly groupService;
    constructor(groupService: GroupService);
    getGroups(): import("./task.model").GroupModel[];
}
