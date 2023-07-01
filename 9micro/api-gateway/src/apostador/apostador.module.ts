import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { ApostadorController } from './apostador.controller';

@Module({
  imports: [ProxyModule],
  controllers: [ApostadorController],
})
export class ApostadorModule {}
