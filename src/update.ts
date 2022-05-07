import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.update({
    where: {
      name: 'angular' 
    },
    data: {
      duration: 120
    }
  })

  console.log(course)
}

main();