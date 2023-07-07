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
exports.ApostadorService = void 0;
const common_1 = require("@nestjs/common");
const apostador_entity_1 = require("./entities/apostador.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ApostadorService = class ApostadorService {
    constructor(apostadorRepository) {
        this.apostadorRepository = apostadorRepository;
        this.logger = new common_1.Logger('ApostadorService');
    }
    async create(createApostadorDto) {
        try {
            const apostador = this.apostadorRepository.create(createApostadorDto);
            await this.apostadorRepository.save(apostador);
            return apostador;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505')
                throw new common_1.BadRequestException(error.detail);
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Error no esperado');
        }
    }
    findAll() {
        return this.apostadorRepository.find({});
    }
    async findOne(id) {
        const apostador = await this.apostadorRepository.findOneBy({ id });
        if (!apostador)
            throw new common_1.NotFoundException(`Apostador ${id} no encontrado`);
        return apostador;
    }
    async update(id, updateApostadorDto) {
        const apostador = await this.apostadorRepository.preload(Object.assign({ id: id }, updateApostadorDto));
        if (!apostador)
            throw new common_1.NotFoundException(`Apostador ${id} no encontrado`);
        try {
            await this.apostadorRepository.save(apostador);
            return apostador;
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(id) {
        const apostador = await this.findOne(id);
        await this.apostadorRepository.remove(apostador);
    }
};
ApostadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apostador_entity_1.Apostador)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ApostadorService);
exports.ApostadorService = ApostadorService;
//# sourceMappingURL=apostador.service.js.map