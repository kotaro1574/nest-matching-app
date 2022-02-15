import { Query, Resolver } from '@nestjs/graphql';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [Item], { name: 'Items' })
  findAll() {
    return this.itemsService.findAll();
  }
}
