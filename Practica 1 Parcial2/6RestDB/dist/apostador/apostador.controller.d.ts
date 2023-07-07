import { ApostadorService } from './apostador.service';
import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Apostador } from './entities/apostador.entity';
export declare class ApostadorController {
    private readonly apostadorService;
    constructor(apostadorService: ApostadorService);
    create(createApostadorDto: CreateApostadorDto): Promise<Apostador>;
    findAll(): Promise<Apostador[]>;
    findOne(id: string): Promise<Apostador>;
    update(id: string, UpdateApostadorDto: UpdateApostadorDto): Promise<Apostador>;
    remove(id: string): Promise<void>;
}
