-- CreateTable
CREATE TABLE "UnitOwner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "unitNumber" TEXT NOT NULL,
    "entitlement" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnitOwner_pkey" PRIMARY KEY ("id")
);
