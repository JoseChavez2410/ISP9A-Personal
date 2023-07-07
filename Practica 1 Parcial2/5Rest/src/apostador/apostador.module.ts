import { Module } from '@nestjs/common';
import { EstudianteService } from './apostador.service';
import { EstudianteController } from './apostador.controller';

@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService]
})
export class EstudianteModule {}
