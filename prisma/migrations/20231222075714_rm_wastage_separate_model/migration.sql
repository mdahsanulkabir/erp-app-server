/*
  Warnings:

  - You are about to drop the column `wastagePercentageForOrder` on the `RM` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "HSCode" ALTER COLUMN "updateReasons" SET DEFAULT 'new hscode';

-- AlterTable
ALTER TABLE "ImportRmRequirementDetail" ALTER COLUMN "updateReasons" SET DEFAULT 'new immport requirement';

-- AlterTable
ALTER TABLE "RM" DROP COLUMN "wastagePercentageForOrder";

-- CreateTable
CREATE TABLE "RMWastagePercentage" (
    "id" TEXT NOT NULL,
    "rmId" TEXT NOT NULL,
    "rmWastagePercentage" INTEGER NOT NULL DEFAULT 2,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updated_at" TIMESTAMPTZ,
    "comment" TEXT,

    CONSTRAINT "RMWastagePercentage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RMWastagePercentage" ADD CONSTRAINT "RMWastagePercentage_rmId_fkey" FOREIGN KEY ("rmId") REFERENCES "RM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RMWastagePercentage" ADD CONSTRAINT "RMWastagePercentage_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
