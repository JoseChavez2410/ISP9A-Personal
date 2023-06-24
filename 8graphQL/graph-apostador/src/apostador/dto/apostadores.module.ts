import { Module } from '@nestjs/common';
import { ApostadoresService } from './apostadores.service';
import { ApostadoresResolver } from './apostadores.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apostador } from './entities/apostador.entity';

@Module({
  providers: [ApostadoresResolver, ApostadoresService],
  imports:[
    TypeOrmModule.forFeature([Apostador])
  ]
})
export class ApostadoresModule {}
