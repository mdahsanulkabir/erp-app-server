-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "rmSourceId" TEXT;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_rmSourceId_fkey" FOREIGN KEY ("rmSourceId") REFERENCES "RmSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;
