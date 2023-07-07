import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Apostador } from './entities/apostador.entity';
import { Repository } from 'typeorm';
export declare class ApostadorService {
    private readonly apostadorRepository;
    private readonly logger;
    constructor(apostadorRepository: Repository<Apostador>);
    create(createApostadorDto: CreateApostadorDto): Promise<Apostador>;
    findAll(): Promise<Apostador[]>;
    findOne(id: string): Promise<Apostador>;
    update(id: string, updateApostadorDto: UpdateApostadorDto): Promise<Apostador>;
    remove(id: string): Promise<void>;
}
