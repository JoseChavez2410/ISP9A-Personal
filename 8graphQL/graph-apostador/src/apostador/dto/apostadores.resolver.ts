import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ApostadoresService } from './apostadores.service';
import { Apostador } from './entities/apostador.entity';
import { UpdateApostadorInput, CreateApostadorInput } from './inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Apostador)
export class ApostadoresResolver {
  constructor(private readonly apostadoresService: ApostadoresService) {}

  @Mutation(() => Apostador)
  async createApostador(@Args('createApostadorInput') createApostadorInput: CreateApostadorInput)
  :Promise<Apostador> {
    return this.apostadoresService.create(createApostadorInput);
  }

  @Query(() => [Apostador], { name: 'apostadores' })
  async findAll():Promise<Apostador[]> {
    return this.apostadoresService.findAll();
  }

  @Query(() => Apostador, { name: 'apostadores' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Apostador> {
    return this.apostadoresService.findOne(id);
  }

  @Mutation(() => Apostador)
  updateCurso(@Args('updateApostadorInput') updateApostadorInput: UpdateApostadorInput): Promise<Apostador> {
    return this.apostadoresService.update(updateApostadorInput.id, updateApostadorInput);
  }

  @Mutation(() => Apostador)
  removeCurso(@Args('id', { type: () => ID }) id: string): Promise<Apostador> {
    return this.apostadoresService.remove(id);
  }
}
