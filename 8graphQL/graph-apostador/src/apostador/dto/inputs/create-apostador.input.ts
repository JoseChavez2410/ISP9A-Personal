import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateApostadorInput {

  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  @Field(()=>String )
  @IsNotEmpty()
  identificacion:string;
  
  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

  
}
