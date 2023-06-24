import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApostadorInput, UpdateApostadorInput } from './inputs';
import { Apostador } from './entities/apostador.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApostadoresService {

  constructor( 
    @InjectRepository(Apostador)
    private readonly apostadoresRepository:Repository<Apostador> ){}

  async create(CreateApostadorInput: CreateApostadorInput): Promise<Apostador>  {
    const newApostador= this.apostadoresRepository.create(CreateApostadorInput);
    return await this.apostadoresRepository.save(newApostador); 
  }

  async findAll(): Promise<Apostador[]> {
    return this.apostadoresRepository.find();
  }

  async findOne(id: string): Promise<Apostador> {
     const apostador= await  this.apostadoresRepository.findOneBy({id});
     if (!apostador) throw new NotFoundException(`Not found`)
     return apostador;
  }

  async update(id: string, UpdateApostadorInput: UpdateApostadorInput): Promise<Apostador> {
    
    const apostador = await this.apostadoresRepository.preload(UpdateApostadorInput);
    if (!apostador) throw new NotFoundException(`Not found`)
    return this.apostadoresRepository.save(apostador);

  }

  async remove(id: string): Promise<Apostador> {

    const apostador= await  this.findOne(id);

    // await this.apostadoresRepository.update({id:id},{estado:true  });

    await this.apostadoresRepository.remove(apostador);

    return {...apostador, id};

  }
}
