-- CreateTable
CREATE TABLE "SFGBOMComponent" (
    "id" TEXT NOT NULL,
    "sfGBOMId" TEXT NOT NULL,
    "componentObjectId" TEXT NOT NULL,
    "componentQuantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SFGBOMComponent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SFGBOMComponent" ADD CONSTRAINT "SFGBOMComponent_sfGBOMId_fkey" FOREIGN KEY ("sfGBOMId") REFERENCES "SFGBOM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SFGBOMComponent" ADD CONSTRAINT "SFGBOMComponent_componentObjectId_fkey" FOREIGN KEY ("componentObjectId") REFERENCES "RM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
