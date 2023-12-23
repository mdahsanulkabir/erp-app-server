/*
  Warnings:

  - You are about to drop the column `componentObjectId` on the `SFGBOM` table. All the data in the column will be lost.
  - You are about to drop the column `componentQuantity` on the `SFGBOM` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SFGBOM" DROP CONSTRAINT "SFGBOM_componentObjectId_fkey";

-- AlterTable
ALTER TABLE "SFGBOM" DROP COLUMN "componentObjectId",
DROP COLUMN "componentQuantity";
