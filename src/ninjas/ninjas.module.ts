import { Module } from '@nestjs/common';
import { NinjasController } from 'src/ninjas/ninjas.controller';
import { NinjasService } from './ninjas.service';


@Module({
    controllers: [NinjasController],
    providers: [NinjasService]
})
export class NinjasModule {}
