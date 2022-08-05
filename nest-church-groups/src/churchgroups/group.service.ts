import { Injectable } from "@nestjs/common"
import { GroupModel } from "./task.model"

@Injectable()
export class GroupService {
  _groups: GroupModel[] = [
    {
      id: 1,
      campus: "Asheville",
      demographic: "Men",
      group_type: "Marriage",
      meeting_date: "2020-11-02T19:16:57.985Z",
      zip_code: 28105,
      additionalProp1: {},
    },
    {
      id: 2,
      campus: "Ballantyne",
      demographic: "Singles",
      group_type: "Spiritual Growth",
      meeting_date: "2020-12-02T19:16:57.985Z",
      zip_code: 28277,
      additionalProp1: {},
    },
    {
      id: 3,
      campus: "Blakeney",
      demographic: "Women",
      group_type: "Book Study",
      meeting_date: "2020-09-02T19:16:57.985Z",
      zip_code: 28276,
      additionalProp1: {},
    },
    {
      id: 4,
      campus: "Columbia",
      demographic: "Women",
      group_type: "Book Study",
      meeting_date: "2020-09-02T19:16:57.985Z",
      zip_code: 28277,
      additionalProp1: {},
    },
    {
      id: 5,
      campus: "Concord",
      demographic: "Everyone Welcome",
      group_type: "Parenting",
      meeting_date: "2020-11-02T19:16:57.985Z",
      zip_code: 28276,
      additionalProp1: {},
    },
    {
      id: 6,
      campus: "Elevation Online",
      demographic: "Everyone Welcome",
      group_type: "Sermon Discussion",
      meeting_date: "2020-09-02T19:16:57.985Z",
      zip_code: 28105,
      additionalProp1: {},
    },
    {
      id: 7,
      campus: "Gaston",
      demographic: "Singles",
      group_type: "Christian Basics",
      meeting_date: "2020-10-02T19:16:57.985Z",
      zip_code: 28275,
      additionalProp1: {},
    },
  ]

  findAllGroups(): GroupModel[] {
    return this._groups
  }
}
