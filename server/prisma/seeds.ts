import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const todos: Prisma.TodoCreateInput[] = [
  {
    name: '名前1',
    description: '説明'
  }
]

const transfer = async () => {
  const todoList = [];
  for (const todo of todos) {
      const t = prisma.todo.create({
          data: todo,
      })
      todoList.push(t);
  }
  return await prisma.$transaction(todoList);
}

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  console.log(`Start seeding ...`)

  await transfer();

  console.log(`Seeding finished.`)
}

// 処理開始
main()
  .catch((e) => {
      console.error(e)
      process.exit(1)
  })
  .finally(async () => {
      await prisma.$disconnect()
  })