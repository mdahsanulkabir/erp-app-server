-- CreateTable
CREATE TABLE "RmCategory" (
    "id" TEXT NOT NULL,
    "rmCategory" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updated_at" TIMESTAMPTZ,
    "updateReasons" TEXT NOT NULL DEFAULT 'new RM category',
    "comment" TEXT,

    CONSTRAINT "RmCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RMToRmCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "RmCategory_rmCategory_key" ON "RmCategory"("rmCategory");

-- CreateIndex
CREATE UNIQUE INDEX "_RMToRmCategory_AB_unique" ON "_RMToRmCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_RMToRmCategory_B_index" ON "_RMToRmCategory"("B");

-- AddForeignKey
ALTER TABLE "RmCategory" ADD CONSTRAINT "RmCategory_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RMToRmCategory" ADD CONSTRAINT "_RMToRmCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "RM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RMToRmCategory" ADD CONSTRAINT "_RMToRmCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "RmCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
