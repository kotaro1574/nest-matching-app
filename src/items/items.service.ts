import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemInput } from './dto/create-item.input';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.item.findMany();
  }

  create(createItemInput: CreateItemInput) {
    const newItem = this.prisma.item.create({
      data: {
        name: createItemInput.name,
        description: createItemInput.description,
      },
    });
    return newItem;
  }
}
