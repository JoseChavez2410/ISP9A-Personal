import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Apostador } from './entities/apostador.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApostadorService {

  private readonly logger = new Logger('ApostadorService');

  constructor( 
    @InjectRepository(Apostador) 
    private readonly apostadorRepository: Repository<Apostador>,

    ){}

  
  async create(createApostadorDto: CreateApostadorDto) {
    try {
      const apostador =  this.apostadorRepository.create(createApostadorDto);
      await this.apostadorRepository.save(apostador);
      return apostador;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.apostadorRepository.find({});
  }

  async findOne(id: string) {
    const apostador= await  this.apostadorRepository.findOneBy ({ id });
    if (!apostador)
      throw new NotFoundException(`Apostador ${id} no encontrado`);
    return apostador;

  }

  async update(id: string, updateApostadorDto: UpdateApostadorDto) {
    const apostador = await this.apostadorRepository.preload({
      id: id,
      ...updateApostadorDto
    });
    if (!apostador) throw new NotFoundException(`Apostador ${id} no encontrado`)

    try {
      await  this.apostadorRepository.save(apostador)
      return apostador;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const apostador = await this.findOne(id);
    await this.apostadorRepository.remove(apostador);

  }
}
