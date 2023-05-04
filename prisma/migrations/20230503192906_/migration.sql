-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_id_fkey";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "brandId" TEXT;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;
