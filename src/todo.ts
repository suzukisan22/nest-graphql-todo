import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Todo {
  @Field((type) => Int)
  id: number

  @Field((type) => String)
  name: string

  @Field((type) => [String], { nullable: true })
  description?: string | null
}