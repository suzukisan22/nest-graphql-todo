import { Inject } from "@nestjs/common";
import { Resolver, Query } from "@nestjs/graphql";
import { PrismaService } from "./prisma.service"
import { Todo } from "./@generated/prisma-nestjs-graphql/todo/todo.model"

@Resolver(of => Todo)
export class TodoResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(returns => [Todo])
  todos() {
    return this.prismaService.todo.findMany();
  }
}