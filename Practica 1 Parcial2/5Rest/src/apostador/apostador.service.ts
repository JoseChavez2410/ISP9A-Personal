import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Apostador } from './entities/apostador.entity';

@Injectable()
export class EstudianteService {

  private estudiantes: Apostador[]=[
    {id:1, identificacion:'1' , nombre:'Uno',estado:true},
    {id:2, identificacion:'2' , nombre:'Dos', estado:true},
  ]

  create(createEstudianteDto: CreateApostadorDto) {
    const estudiante = new Apostador();
    estudiante.id=  Math.max( ... this.estudiantes.map(elemento => elemento.id),0 )+1 ;
    estudiante.nombre= createEstudianteDto.nombre;
    estudiante.identificacion= createEstudianteDto.identificacion;
    this.estudiantes.push(estudiante);
    return estudiante;
  }

  findAll() : Apostador[] {
    return this.estudiantes;
  }

  findOne(id: number) {
    const estudiante =  this.estudiantes.find(estudiante=> estudiante.id===id);
    if (!estudiante) throw new NotFoundException(`ID ${id} not found`)
    return estudiante;
  }

  update(id: number, updateEstudianteDto: UpdateApostadorDto) {
    const { identificacion, nombre, estado   } = updateEstudianteDto;
    const estudiante = this.findOne(id);
    if (nombre) estudiante.nombre= nombre;
    if (estado!= undefined) estudiante.estado= estado;

    this.estudiantes =  this.estudiantes.map( elemento=> {
      if (elemento.id===id) return estudiante;
      return elemento;
    } )

    return estudiante;

  }

  remove(id: number) {
    this.findOne(id);
    this.estudiantes =  this.estudiantes.filter(elemento=> elemento.id!== id);
  }
}
