import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'angular',
      duration: 100,
      description: 'build interfaces friendly'
    }
  })

  console.log('result', result)
}

main()