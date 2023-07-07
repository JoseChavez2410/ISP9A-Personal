import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { ApostadorService } from './apostador.service';
import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Apostador } from './entities/apostador.entity';

@Controller('apostador')
export class ApostadorController {
  constructor(private readonly apostadorService: ApostadorService) {}

  @Post()
  create(@Body() createApostadorDto: CreateApostadorDto) {
    return this.apostadorService.create(createApostadorDto);
  }

  @Get()
  findAll()  {
    return this.apostadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.apostadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() UpdateApostadorDto: UpdateApostadorDto) {
    return this.apostadorService.update(id, UpdateApostadorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.apostadorService.remove(id);
  }
}
