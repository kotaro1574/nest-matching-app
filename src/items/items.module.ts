import { Module } from '@nestjs/common';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ItemsResolver, ItemsService, PrismaService],
})
export class ItemsModule {}
