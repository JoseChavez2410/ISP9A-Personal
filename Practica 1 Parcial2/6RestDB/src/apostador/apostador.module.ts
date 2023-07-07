import { Module } from '@nestjs/common';
import { ApostadorService } from './apostador.service';
import { ApostadorController } from './apostador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apostador } from './entities/apostador.entity';

@Module({
  controllers: [ApostadorController],
  providers: [ApostadorService],
  imports:[ TypeOrmModule.forFeature([
    Apostador
  ]) ]
})
export class ApostadorModule {}
