"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const tag_model_1 = require("./models/tag.model");
let TagService = class TagService {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async searchTags(userTags) {
        let newTags = [];
        let idTags = [];
        await this.tagRepository.findAll()
            .then((data) => {
            let dataIdTag = [];
            let dataNameTag = [];
            data.forEach((element) => { dataNameTag.push(element.dataValues.nameTag); dataIdTag.push(element.dataValues.id); });
            userTags.forEach((element) => {
                if (dataNameTag.includes(element) === false) {
                    newTags.push(element);
                }
                else {
                    let tagIndexById = dataNameTag.findIndex((tag) => tag === element);
                    idTags.push(dataIdTag[tagIndexById]);
                }
            });
        })
            .catch((error) => `ERROR: ${error}`);
        return { newTags, idTags };
    }
    async getIdTagsByPost(userTags) {
        this.searchTags(userTags)
            .then(async (data) => {
            if (data.newTags.length !== 0) {
                await this.tagRepository.bulkCreate(data.newTags)
                    .then((dataNewTags) => {
                    dataNewTags.forEach((element) => {
                        data.idTags.push(element.dataValues.id);
                    });
                })
                    .catch((error) => `ERROR: ${error}`);
            }
            return data.idTags;
        })
            .catch((error) => `ERROR: ${error}`);
    }
};
exports.TagService = TagService;
exports.TagService = TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(tag_model_1.Tag)),
    __metadata("design:paramtypes", [Object])
], TagService);
//# sourceMappingURL=tag.service.js.map