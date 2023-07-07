import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Apostador } from './entities/apostador.entity';
export declare class EstudianteService {
    private estudiantes;
    create(createEstudianteDto: CreateApostadorDto): Apostador;
    findAll(): Apostador[];
    findOne(id: number): Apostador;
    update(id: number, updateEstudianteDto: UpdateApostadorDto): Apostador;
    remove(id: number): void;
}
