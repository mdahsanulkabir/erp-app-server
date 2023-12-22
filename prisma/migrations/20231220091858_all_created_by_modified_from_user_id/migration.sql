/*
  Warnings:

  - You are about to drop the column `userId` on the `Bank` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ExternalContact` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ImportPO` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ImportPODetails` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ImportRmRequirementDetail` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ImportRmRequirementTag` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `MRPBOM` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ProductBase` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ProductCapacityUnit` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ProductVariant` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `RM` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `RmSource` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `RmUnit` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `SFGBOM` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `SKU` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `SeriesCategory` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Shipment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `SourceCategory` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Supplier` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `SupplierRM` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Bank` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `ExternalContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `ImportPO` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `ImportPODetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `ImportRmRequirementDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `ImportRmRequirementTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `MRPBOM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `RM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `RmSource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `RmUnit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `SFGBOM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `SupplierRM` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bank" DROP CONSTRAINT "Bank_userId_fkey";

-- DropForeignKey
ALTER TABLE "ExternalContact" DROP CONSTRAINT "ExternalContact_userId_fkey";

-- DropForeignKey
ALTER TABLE "ImportPO" DROP CONSTRAINT "ImportPO_userId_fkey";

-- DropForeignKey
ALTER TABLE "ImportPODetails" DROP CONSTRAINT "ImportPODetails_userId_fkey";

-- DropForeignKey
ALTER TABLE "ImportRmRequirementDetail" DROP CONSTRAINT "ImportRmRequirementDetail_userId_fkey";

-- DropForeignKey
ALTER TABLE "ImportRmRequirementTag" DROP CONSTRAINT "ImportRmRequirementTag_userId_fkey";

-- DropForeignKey
ALTER TABLE "MRPBOM" DROP CONSTRAINT "MRPBOM_userId_fkey";

-- DropForeignKey
ALTER TABLE "RM" DROP CONSTRAINT "RM_userId_fkey";

-- DropForeignKey
ALTER TABLE "RmSource" DROP CONSTRAINT "RmSource_userId_fkey";

-- DropForeignKey
ALTER TABLE "RmUnit" DROP CONSTRAINT "RmUnit_userId_fkey";

-- DropForeignKey
ALTER TABLE "SFGBOM" DROP CONSTRAINT "SFGBOM_userId_fkey";

-- DropForeignKey
ALTER TABLE "Shipment" DROP CONSTRAINT "Shipment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_userId_fkey";

-- DropForeignKey
ALTER TABLE "SupplierRM" DROP CONSTRAINT "SupplierRM_userId_fkey";

-- AlterTable
ALTER TABLE "Bank" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExternalContact" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ImportPO" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ImportPODetails" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ImportRmRequirementDetail" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ImportRmRequirementTag" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MRPBOM" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductBase" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "ProductCapacityUnit" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "RM" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RmSource" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RmUnit" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "SFGBOM" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SKU" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "SeriesCategory" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Shipment" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SourceCategory" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SupplierRM" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "RmUnit" ADD CONSTRAINT "RmUnit_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RmSource" ADD CONSTRAINT "RmSource_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RM" ADD CONSTRAINT "RM_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SFGBOM" ADD CONSTRAINT "SFGBOM_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MRPBOM" ADD CONSTRAINT "MRPBOM_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalContact" ADD CONSTRAINT "ExternalContact_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierRM" ADD CONSTRAINT "SupplierRM_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportRmRequirementTag" ADD CONSTRAINT "ImportRmRequirementTag_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportRmRequirementDetail" ADD CONSTRAINT "ImportRmRequirementDetail_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportPO" ADD CONSTRAINT "ImportPO_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportPODetails" ADD CONSTRAINT "ImportPODetails_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
