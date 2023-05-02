-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_manufacturerId_fkey";

-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "model" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL,
ALTER COLUMN "engine" DROP NOT NULL,
ALTER COLUMN "fuel" DROP NOT NULL,
ALTER COLUMN "manufacturerId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "CarType" (
    "id" TEXT NOT NULL,

    CONSTRAINT "CarType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "CarManufacturer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
