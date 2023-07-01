import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ApostadorDTO {

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    identificacion:string;

}
