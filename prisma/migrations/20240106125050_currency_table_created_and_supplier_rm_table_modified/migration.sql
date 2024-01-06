/*
  Warnings:

  - You are about to drop the `_RMToSupplierRM` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `currencyId` to the `SupplierRM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objectId` to the `SupplierRM` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RMToSupplierRM" DROP CONSTRAINT "_RMToSupplierRM_A_fkey";

-- DropForeignKey
ALTER TABLE "_RMToSupplierRM" DROP CONSTRAINT "_RMToSupplierRM_B_fkey";

-- AlterTable
ALTER TABLE "SupplierRM" ADD COLUMN     "currencyId" TEXT NOT NULL,
ADD COLUMN     "objectId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_RMToSupplierRM";

-- CreateTable
CREATE TABLE "Currency" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SupplierRM" ADD CONSTRAINT "SupplierRM_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "RM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierRM" ADD CONSTRAINT "SupplierRM_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
