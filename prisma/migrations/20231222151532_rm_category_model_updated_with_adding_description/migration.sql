/*
  Warnings:

  - Added the required column `rmCategoryDescription` to the `RmCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RmCategory" ADD COLUMN     "rmCategoryDescription" TEXT NOT NULL;
