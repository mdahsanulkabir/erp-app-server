/*
  Warnings:

  - A unique constraint covering the columns `[hsCode]` on the table `HSCode` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hsCode` to the `HSCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HSCode" ADD COLUMN     "hsCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "HSCode_hsCode_key" ON "HSCode"("hsCode");
