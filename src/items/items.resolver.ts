import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';
import { Prisma } from '@prisma/client';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [Item], { name: 'Items' })
  findAll() {
    return this.itemsService.findAll();
  }

  @Mutation(() => Item)
  createItem(@Args() data: Prisma.ItemCreateInput) {
    return this.itemsService.create(data);
  }
}
