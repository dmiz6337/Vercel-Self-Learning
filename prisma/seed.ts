import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.UnitOwner.createMany({
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
}

main().finally(() => prisma.$disconnect());
