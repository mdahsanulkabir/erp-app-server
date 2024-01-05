/*
  Warnings:

  - You are about to drop the `MRPBOM` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MRPBOM" DROP CONSTRAINT "MRPBOM_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "MRPBOM" DROP CONSTRAINT "MRPBOM_objectId_fkey";

-- DropForeignKey
ALTER TABLE "MRPBOM" DROP CONSTRAINT "MRPBOM_skuCode_fkey";

-- DropTable
DROP TABLE "MRPBOM";

-- CreateTable
CREATE TABLE "MRPBOMFIXED" (
    "id" TEXT NOT NULL,
    "skuCode" TEXT NOT NULL,
    "objectId" TEXT NOT NULL,
    "rmQuantity" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updated_at" TIMESTAMPTZ,
    "comment" TEXT,

    CONSTRAINT "MRPBOMFIXED_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MRPBOMFIXED" ADD CONSTRAINT "MRPBOMFIXED_skuCode_fkey" FOREIGN KEY ("skuCode") REFERENCES "SKU"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MRPBOMFIXED" ADD CONSTRAINT "MRPBOMFIXED_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "RM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MRPBOMFIXED" ADD CONSTRAINT "MRPBOMFIXED_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
