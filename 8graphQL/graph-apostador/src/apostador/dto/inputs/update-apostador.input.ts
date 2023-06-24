import { IsUUID } from 'class-validator';
import { CreateApostadorInput } from './create-apostador.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateApostadorInput extends PartialType(CreateApostadorInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
