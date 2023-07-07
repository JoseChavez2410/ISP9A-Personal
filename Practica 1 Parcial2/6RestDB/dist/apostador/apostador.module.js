"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApostadorModule = void 0;
const common_1 = require("@nestjs/common");
const apostador_service_1 = require("./apostador.service");
const apostador_controller_1 = require("./apostador.controller");
const typeorm_1 = require("@nestjs/typeorm");
const apostador_entity_1 = require("./entities/apostador.entity");
let ApostadorModule = class ApostadorModule {
};
ApostadorModule = __decorate([
    (0, common_1.Module)({
        controllers: [apostador_controller_1.ApostadorController],
        providers: [apostador_service_1.ApostadorService],
        imports: [typeorm_1.TypeOrmModule.forFeature([
                apostador_entity_1.Apostador
            ])]
    })
], ApostadorModule);
exports.ApostadorModule = ApostadorModule;
//# sourceMappingURL=apostador.module.js.map