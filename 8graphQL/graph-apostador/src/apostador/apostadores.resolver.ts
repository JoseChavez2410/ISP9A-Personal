import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ApostadoresService } from './apostadores.service';
import { Apostador } from './entities/apostador.entity';
import { UpdateApostadorInput, CreateApostadorInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Apostador)
export class ApostadoresResolver {
  constructor(private readonly ApostadoresService: ApostadoresService) {}

  @Mutation(() => Apostador)
  async createApostador(@Args('CreateApostadorInput') CreateApostadorInput: CreateApostadorInput)
  :Promise<Apostador> {
    return this.ApostadoresService.create(CreateApostadorInput);
  }

  @Query(() => [Apostador], { name: 'apostadores' })
  async findAll():Promise<Apostador[]> {
    return this.ApostadoresService.findAll();
  }

  @Query(() => Apostador, { name: 'apostador' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Apostador> {
    return this.ApostadoresService.findOne(id);
  }

  @Mutation(() => Apostador)
  updateCurso(@Args('UpdateApostadorInput') UpdateApostadorInput: UpdateApostadorInput): Promise<Apostador> {
    return this.ApostadoresService.update(UpdateApostadorInput.id, UpdateApostadorInput);
  }

  @Mutation(() => Apostador)
  removeCurso(@Args('id', { type: () => ID }) id: string): Promise<Apostador> {
    return this.ApostadoresService.remove(id);
  }
}
