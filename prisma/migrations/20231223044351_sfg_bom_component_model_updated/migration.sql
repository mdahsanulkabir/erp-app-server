/*
  Warnings:

  - Added the required column `createdBy` to the `SFGBOMComponent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SFGBOMComponent" ADD COLUMN     "comment" TEXT,
ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateReasons" TEXT NOT NULL DEFAULT 'new SFGBOM entry',
ADD COLUMN     "updated_at" TIMESTAMPTZ;

-- AddForeignKey
ALTER TABLE "SFGBOMComponent" ADD CONSTRAINT "SFGBOMComponent_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
