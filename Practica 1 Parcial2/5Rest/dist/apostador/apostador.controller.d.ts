import { EstudianteService } from './apostador.service';
import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Apostador } from './entities/apostador.entity';
export declare class EstudianteController {
    private readonly estudianteService;
    constructor(estudianteService: EstudianteService);
    create(createEstudianteDto: CreateApostadorDto): Apostador;
    findAll(): Apostador[];
    findOne(id: number): Apostador;
    update(id: string, updateEstudianteDto: UpdateApostadorDto): Apostador;
    remove(id: string): void;
}
