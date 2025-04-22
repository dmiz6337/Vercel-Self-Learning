import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.unitOwner.createMany({
    data: [
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        phone: '0412345678',
        unitNumber: '101',
        entitlement: 120.5,
      },
      {
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        phone: '0498765432',
        unitNumber: '102',
        entitlement: 130.0,
      },
      {
        name: 'Charlie Lee',
        email: 'charlie.lee@example.com',
        phone: null,
        unitNumber: '103',
        entitlement: 115.75,
      },
    ],
    skipDuplicates: true,
  });
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
