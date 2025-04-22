import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.payment.createMany({
    data: [
      {
        description: 'Quarterly Strata Levy',
        amount: 500.00,
      },
      {
        description: 'Special Building Fund',
        amount: 200.00,
      },
      {
        description: 'Annual Insurance Premium',
        amount: 350.50,
      },
    ],
    skipDuplicates: true,
  });
}

main().finally(() => prisma.$disconnect());
