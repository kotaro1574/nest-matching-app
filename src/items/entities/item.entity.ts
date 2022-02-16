import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field()
  name: string;

  @Field()
  description: string;
}
