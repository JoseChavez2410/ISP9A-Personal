import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApostadorMSG, StudentMSG } from '../common/constants';
import { Observable } from 'rxjs';
import { ApostadorDTO } from './dto/apostador.dto';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { IApostador } from 'src/common/interfaces/apostador.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('apostadores')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/apostador')
export class ApostadorController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyApostador = this.clientProxy.clientProxyApostadores();

  @Post()
  create(@Body() apostadorDTO: ApostadorDTO): Observable<IApostador> {
    return this._clientProxyApostador.send(ApostadorMSG.CREATE, apostadorDTO);
  }

  @Get()
  findAll(): Observable<IApostador[]> {
    return this._clientProxyApostador.send(ApostadorMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IApostador> {
    return this._clientProxyApostador.send(ApostadorMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() apostadorDTO: ApostadorDTO): Observable<IApostador> {
    return this._clientProxyApostador.send(ApostadorMSG.UPDATE, { id, apostadorDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyApostador.send(ApostadorMSG.DELETE, id);
  }
}
