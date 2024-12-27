import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { \[testController\]Controller } from './[test-controller/]/[test-controller/].controller';
import { NameController } from './name/name.controller';

@Module({
  imports: [],
  controllers: [AppController, \[testController\]Controller, NameController],
  providers: [AppService],
})
export class AppModule {}
