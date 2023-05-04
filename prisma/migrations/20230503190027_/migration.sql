/*
  Warnings:

  - You are about to drop the column `manufacturerId` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the `CarManufacturer` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `model` on table `Car` required. This step will fail if there are existing NULL values in that column.
  - Made the column `engine` on table `Car` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_manufacturerId_fkey";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "manufacturerId",
ADD COLUMN     "v_max" TEXT,
ALTER COLUMN "model" SET NOT NULL,
ALTER COLUMN "engine" SET NOT NULL;

-- DropTable
DROP TABLE "CarManufacturer";

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_id_fkey" FOREIGN KEY ("id") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
