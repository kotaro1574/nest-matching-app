import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;
}
