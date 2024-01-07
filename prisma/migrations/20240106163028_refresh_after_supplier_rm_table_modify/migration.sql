/*
  Warnings:

  - You are about to drop the `_RmUnitToSupplierRM` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `supplierRmUnitId` to the `SupplierRM` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RmUnitToSupplierRM" DROP CONSTRAINT "_RmUnitToSupplierRM_A_fkey";

-- DropForeignKey
ALTER TABLE "_RmUnitToSupplierRM" DROP CONSTRAINT "_RmUnitToSupplierRM_B_fkey";

-- AlterTable
ALTER TABLE "SupplierRM" ADD COLUMN     "supplierRmUnitId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_RmUnitToSupplierRM";

-- AddForeignKey
ALTER TABLE "SupplierRM" ADD CONSTRAINT "SupplierRM_supplierRmUnitId_fkey" FOREIGN KEY ("supplierRmUnitId") REFERENCES "RmUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
