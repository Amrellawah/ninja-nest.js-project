import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { NinjasController } from './ninjas/ninjas.controller';
import { NinjasService } from './ninjas/ninjas.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NinjasModule, UsersModule],
  controllers: [AppController, NinjasController],
  providers: [AppService,NinjasService],
  exports: [NinjasService], 
})
export class AppModule {}
