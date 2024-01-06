/*
  Warnings:

  - You are about to drop the column `externalContactId` on the `Supplier` table. All the data in the column will be lost.
  - Added the required column `supplierId` to the `ExternalContact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_externalContactId_fkey";

-- AlterTable
ALTER TABLE "ExternalContact" ADD COLUMN     "supplierId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "externalContactId";

-- AddForeignKey
ALTER TABLE "ExternalContact" ADD CONSTRAINT "ExternalContact_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
