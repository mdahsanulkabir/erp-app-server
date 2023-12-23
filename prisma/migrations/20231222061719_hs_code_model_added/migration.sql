/*
  Warnings:

  - You are about to drop the column `hsCode` on the `RM` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RM" DROP COLUMN "hsCode";

-- CreateTable
CREATE TABLE "HSCode" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updated_at" TIMESTAMPTZ,
    "updateReasons" TEXT NOT NULL DEFAULT 'new requirement',

    CONSTRAINT "HSCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HSCodeToRM" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HSCodeToRM_AB_unique" ON "_HSCodeToRM"("A", "B");

-- CreateIndex
CREATE INDEX "_HSCodeToRM_B_index" ON "_HSCodeToRM"("B");

-- AddForeignKey
ALTER TABLE "HSCode" ADD CONSTRAINT "HSCode_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HSCodeToRM" ADD CONSTRAINT "_HSCodeToRM_A_fkey" FOREIGN KEY ("A") REFERENCES "HSCode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HSCodeToRM" ADD CONSTRAINT "_HSCodeToRM_B_fkey" FOREIGN KEY ("B") REFERENCES "RM"("id") ON DELETE CASCADE ON UPDATE CASCADE;
