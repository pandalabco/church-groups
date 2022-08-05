"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
let GroupService = class GroupService {
    constructor() {
        this._groups = [
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
        ];
    }
    findAllGroups() {
        return this._groups;
    }
};
GroupService = __decorate([
    (0, common_1.Injectable)()
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map