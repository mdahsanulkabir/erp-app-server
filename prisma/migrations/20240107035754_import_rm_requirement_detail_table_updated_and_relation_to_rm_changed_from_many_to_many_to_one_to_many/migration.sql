/*
  Warnings:

  - You are about to drop the `_ImportRmRequirementDetailToRM` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `objectId` to the `ImportRmRequirementDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ImportRmRequirementDetailToRM" DROP CONSTRAINT "_ImportRmRequirementDetailToRM_A_fkey";

-- DropForeignKey
ALTER TABLE "_ImportRmRequirementDetailToRM" DROP CONSTRAINT "_ImportRmRequirementDetailToRM_B_fkey";

-- AlterTable
ALTER TABLE "ImportRmRequirementDetail" ADD COLUMN     "objectId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ImportRmRequirementDetailToRM";

-- AddForeignKey
ALTER TABLE "ImportRmRequirementDetail" ADD CONSTRAINT "ImportRmRequirementDetail_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "RM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
