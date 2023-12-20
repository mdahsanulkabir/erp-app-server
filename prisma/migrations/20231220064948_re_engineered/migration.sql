-- CreateEnum
CREATE TYPE "UserActiveStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "departmentName" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new department',

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userArcelikId" INTEGER NOT NULL,
    "userSingerId" TEXT,
    "userEmail" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "deptId" TEXT NOT NULL,
    "status" "UserActiveStatus" NOT NULL DEFAULT 'INACTIVE',
    "password" TEXT NOT NULL,
    "refreshToken" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new user',
    "comment" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL,
    "roleName" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new user role',
    "comment" TEXT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductBase" (
    "id" TEXT NOT NULL,
    "baseProduct" TEXT NOT NULL,
    "productCapacityUnitId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new product base',
    "comment" TEXT,

    CONSTRAINT "ProductBase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourceCategory" (
    "id" TEXT NOT NULL,
    "sourceCategory" TEXT NOT NULL,
    "productBaseId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new source category',
    "comment" TEXT,

    CONSTRAINT "SourceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCapacityUnit" (
    "id" TEXT NOT NULL,
    "productCapacityUnit" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new product capacity unit',
    "comment" TEXT,

    CONSTRAINT "ProductCapacityUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,
    "productVariant" TEXT NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new product variant',

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeriesCategory" (
    "id" TEXT NOT NULL,
    "seriesName" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new product series category',
    "comment" TEXT,

    CONSTRAINT "SeriesCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SKU" (
    "id" TEXT NOT NULL,
    "skuCode" TEXT NOT NULL,
    "skuSAPCode" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "productBaseId" TEXT NOT NULL,
    "productCapacity" INTEGER NOT NULL,
    "seriesCategoryId" TEXT,
    "feature" JSONB,
    "picture1" TEXT,
    "picture2" TEXT,
    "picture3" TEXT,
    "picture4" TEXT,
    "picture5" TEXT,
    "obsolete" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new sku',

    CONSTRAINT "SKU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RmUnit" (
    "id" TEXT NOT NULL,
    "rmUnit" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new rm unit',
    "comment" TEXT,

    CONSTRAINT "RmUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RmSource" (
    "id" TEXT NOT NULL,
    "rmSource" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new RM source',
    "comment" TEXT,

    CONSTRAINT "RmSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RM" (
    "id" TEXT NOT NULL,
    "objectId" TEXT NOT NULL,
    "sisCode" TEXT NOT NULL,
    "sapCode" TEXT NOT NULL,
    "objectName" TEXT NOT NULL,
    "alternativeName" TEXT,
    "rmUnitId" TEXT NOT NULL,
    "dimension" TEXT,
    "drawing" TEXT,
    "color" TEXT,
    "picture1" TEXT,
    "picture2" TEXT,
    "picture3" TEXT,
    "picture4" TEXT,
    "picture5" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new RM',
    "comment" TEXT,
    "obsolete" BOOLEAN NOT NULL DEFAULT false,
    "hsCode" TEXT NOT NULL DEFAULT 'n/a',
    "wastagePercentageForOrder" INTEGER,

    CONSTRAINT "RM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SFGBOM" (
    "id" TEXT NOT NULL,
    "sfgObjectId" TEXT NOT NULL,
    "componentObjectId" TEXT NOT NULL,
    "componentQuantity" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new SFGBOM entry',
    "comment" TEXT,

    CONSTRAINT "SFGBOM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MRPBOM" (
    "id" TEXT NOT NULL,
    "skuCode" TEXT NOT NULL,
    "objectId" TEXT NOT NULL,
    "rmQuantity" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "comment" TEXT,

    CONSTRAINT "MRPBOM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExternalContact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new supplier contact',
    "comment" TEXT,

    CONSTRAINT "ExternalContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "supplierName" TEXT NOT NULL,
    "supplierAlternateName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "externalContactId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new supplier',
    "comment" TEXT,
    "supplierNotExist" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupplierRM" (
    "id" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "moq" INTEGER,
    "leadTimeToReadinessInDays" INTEGER,
    "supplierRmUnitConversion" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "pricePerUnit" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new supplier',
    "comment" TEXT,

    CONSTRAINT "SupplierRM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImportRmRequirementTag" (
    "id" TEXT NOT NULL,
    "importRmRequirementTag" TEXT NOT NULL,
    "publishAndLockedForNewItem" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new requirement tag added',
    "comment" TEXT,

    CONSTRAINT "ImportRmRequirementTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImportRmRequirementDetail" (
    "id" TEXT NOT NULL,
    "importRmRequirementTagId" TEXT NOT NULL,
    "rmQuantity" INTEGER NOT NULL,
    "requirementDate" TIMESTAMP(3) NOT NULL,
    "requirementLocked" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new requirement',
    "comment" TEXT,

    CONSTRAINT "ImportRmRequirementDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImportPO" (
    "id" TEXT NOT NULL,
    "trackingId" TEXT NOT NULL,
    "trackingStatus" TEXT NOT NULL DEFAULT 'PO Created',
    "sapPOCode" TEXT,
    "supplierId" TEXT NOT NULL,
    "piCode" TEXT NOT NULL DEFAULT 'not available',
    "incoTerm" TEXT NOT NULL DEFAULT 'n/a',
    "expectedEtd" TIMESTAMP(3),
    "expectedEta" TIMESTAMP(3),
    "etd" TIMESTAMP(3),
    "eta" TIMESTAMP(3),
    "shipmentReadinessDate" TIMESTAMP(3),
    "bankId" TEXT,
    "lcNumber" TEXT,
    "inBoundLogisticsFileNumber" TEXT,
    "amount" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new PO code generated',
    "comment" TEXT,

    CONSTRAINT "ImportPO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" TEXT NOT NULL,
    "importPoId" TEXT NOT NULL,
    "shipmentId" TEXT NOT NULL,
    "shipmentDate" TIMESTAMP(3) NOT NULL,
    "shipmentMode" TEXT NOT NULL,
    "portArrivalDate" TEXT NOT NULL,
    "BLDate" TIMESTAMP(3) NOT NULL,
    "BLReceiveDate" TIMESTAMP(3) NOT NULL,
    "BLNumber" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new shipment info generated',
    "comment" TEXT,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImportPODetails" (
    "id" TEXT NOT NULL,
    "ImportRmRequirementDetailId" TEXT NOT NULL,
    "importPoId" TEXT NOT NULL,
    "piQuantity" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new PO details generated',
    "comment" TEXT,

    CONSTRAINT "ImportPODetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "updateReasons" TEXT NOT NULL DEFAULT 'new Bank created',
    "comment" TEXT,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RmUnitToSupplierRM" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RMToRmSource" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RMToSupplierRM" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ImportRmRequirementDetailToRM" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ImportPODetailsToSupplierRM" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentName_key" ON "Department"("departmentName");

-- CreateIndex
CREATE UNIQUE INDEX "User_userArcelikId_key" ON "User"("userArcelikId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userSingerId_key" ON "User"("userSingerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Role_roleName_key" ON "Role"("roleName");

-- CreateIndex
CREATE UNIQUE INDEX "ProductBase_baseProduct_key" ON "ProductBase"("baseProduct");

-- CreateIndex
CREATE UNIQUE INDEX "SourceCategory_sourceCategory_key" ON "SourceCategory"("sourceCategory");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCapacityUnit_productCapacityUnit_key" ON "ProductCapacityUnit"("productCapacityUnit");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productVariant_key" ON "ProductVariant"("productVariant");

-- CreateIndex
CREATE UNIQUE INDEX "SeriesCategory_seriesName_key" ON "SeriesCategory"("seriesName");

-- CreateIndex
CREATE UNIQUE INDEX "SKU_skuCode_key" ON "SKU"("skuCode");

-- CreateIndex
CREATE UNIQUE INDEX "SKU_skuSAPCode_key" ON "SKU"("skuSAPCode");

-- CreateIndex
CREATE UNIQUE INDEX "RmUnit_rmUnit_key" ON "RmUnit"("rmUnit");

-- CreateIndex
CREATE UNIQUE INDEX "RmSource_rmSource_key" ON "RmSource"("rmSource");

-- CreateIndex
CREATE UNIQUE INDEX "RM_objectId_key" ON "RM"("objectId");

-- CreateIndex
CREATE UNIQUE INDEX "RM_sisCode_key" ON "RM"("sisCode");

-- CreateIndex
CREATE UNIQUE INDEX "RM_sapCode_key" ON "RM"("sapCode");

-- CreateIndex
CREATE UNIQUE INDEX "RM_objectName_key" ON "RM"("objectName");

-- CreateIndex
CREATE UNIQUE INDEX "ExternalContact_email_key" ON "ExternalContact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_supplierName_key" ON "Supplier"("supplierName");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_supplierAlternateName_key" ON "Supplier"("supplierAlternateName");

-- CreateIndex
CREATE UNIQUE INDEX "ImportRmRequirementTag_importRmRequirementTag_key" ON "ImportRmRequirementTag"("importRmRequirementTag");

-- CreateIndex
CREATE UNIQUE INDEX "ImportPO_trackingId_key" ON "ImportPO"("trackingId");

-- CreateIndex
CREATE UNIQUE INDEX "ImportPO_sapPOCode_key" ON "ImportPO"("sapPOCode");

-- CreateIndex
CREATE UNIQUE INDEX "ImportPO_lcNumber_key" ON "ImportPO"("lcNumber");

-- CreateIndex
CREATE UNIQUE INDEX "ImportPO_inBoundLogisticsFileNumber_key" ON "ImportPO"("inBoundLogisticsFileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_bankName_key" ON "Bank"("bankName");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RmUnitToSupplierRM_AB_unique" ON "_RmUnitToSupplierRM"("A", "B");

-- CreateIndex
CREATE INDEX "_RmUnitToSupplierRM_B_index" ON "_RmUnitToSupplierRM"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RMToRmSource_AB_unique" ON "_RMToRmSource"("A", "B");

-- CreateIndex
CREATE INDEX "_RMToRmSource_B_index" ON "_RMToRmSource"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RMToSupplierRM_AB_unique" ON "_RMToSupplierRM"("A", "B");

-- CreateIndex
CREATE INDEX "_RMToSupplierRM_B_index" ON "_RMToSupplierRM"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImportRmRequirementDetailToRM_AB_unique" ON "_ImportRmRequirementDetailToRM"("A", "B");

-- CreateIndex
CREATE INDEX "_ImportRmRequirementDetailToRM_B_index" ON "_ImportRmRequirementDetailToRM"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImportPODetailsToSupplierRM_AB_unique" ON "_ImportPODetailsToSupplierRM"("A", "B");

-- CreateIndex
CREATE INDEX "_ImportPODetailsToSupplierRM_B_index" ON "_ImportPODetailsToSupplierRM"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductBase" ADD CONSTRAINT "ProductBase_productCapacityUnitId_fkey" FOREIGN KEY ("productCapacityUnitId") REFERENCES "ProductCapacityUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceCategory" ADD CONSTRAINT "SourceCategory_productBaseId_fkey" FOREIGN KEY ("productBaseId") REFERENCES "ProductBase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SKU" ADD CONSTRAINT "SKU_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SKU" ADD CONSTRAINT "SKU_productBaseId_fkey" FOREIGN KEY ("productBaseId") REFERENCES "ProductBase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SKU" ADD CONSTRAINT "SKU_seriesCategoryId_fkey" FOREIGN KEY ("seriesCategoryId") REFERENCES "SeriesCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RmUnit" ADD CONSTRAINT "RmUnit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RmSource" ADD CONSTRAINT "RmSource_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RM" ADD CONSTRAINT "RM_rmUnitId_fkey" FOREIGN KEY ("rmUnitId") REFERENCES "RmUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RM" ADD CONSTRAINT "RM_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SFGBOM" ADD CONSTRAINT "SFGBOM_sfgObjectId_fkey" FOREIGN KEY ("sfgObjectId") REFERENCES "RM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SFGBOM" ADD CONSTRAINT "SFGBOM_componentObjectId_fkey" FOREIGN KEY ("componentObjectId") REFERENCES "RM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SFGBOM" ADD CONSTRAINT "SFGBOM_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MRPBOM" ADD CONSTRAINT "MRPBOM_skuCode_fkey" FOREIGN KEY ("skuCode") REFERENCES "SKU"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MRPBOM" ADD CONSTRAINT "MRPBOM_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "RM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MRPBOM" ADD CONSTRAINT "MRPBOM_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalContact" ADD CONSTRAINT "ExternalContact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_externalContactId_fkey" FOREIGN KEY ("externalContactId") REFERENCES "ExternalContact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierRM" ADD CONSTRAINT "SupplierRM_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierRM" ADD CONSTRAINT "SupplierRM_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportRmRequirementTag" ADD CONSTRAINT "ImportRmRequirementTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportRmRequirementDetail" ADD CONSTRAINT "ImportRmRequirementDetail_importRmRequirementTagId_fkey" FOREIGN KEY ("importRmRequirementTagId") REFERENCES "ImportRmRequirementTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportRmRequirementDetail" ADD CONSTRAINT "ImportRmRequirementDetail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportPO" ADD CONSTRAINT "ImportPO_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportPO" ADD CONSTRAINT "ImportPO_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportPO" ADD CONSTRAINT "ImportPO_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_importPoId_fkey" FOREIGN KEY ("importPoId") REFERENCES "ImportPO"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportPODetails" ADD CONSTRAINT "ImportPODetails_ImportRmRequirementDetailId_fkey" FOREIGN KEY ("ImportRmRequirementDetailId") REFERENCES "ImportRmRequirementDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportPODetails" ADD CONSTRAINT "ImportPODetails_importPoId_fkey" FOREIGN KEY ("importPoId") REFERENCES "ImportPO"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportPODetails" ADD CONSTRAINT "ImportPODetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RmUnitToSupplierRM" ADD CONSTRAINT "_RmUnitToSupplierRM_A_fkey" FOREIGN KEY ("A") REFERENCES "RmUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RmUnitToSupplierRM" ADD CONSTRAINT "_RmUnitToSupplierRM_B_fkey" FOREIGN KEY ("B") REFERENCES "SupplierRM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RMToRmSource" ADD CONSTRAINT "_RMToRmSource_A_fkey" FOREIGN KEY ("A") REFERENCES "RM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RMToRmSource" ADD CONSTRAINT "_RMToRmSource_B_fkey" FOREIGN KEY ("B") REFERENCES "RmSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RMToSupplierRM" ADD CONSTRAINT "_RMToSupplierRM_A_fkey" FOREIGN KEY ("A") REFERENCES "RM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RMToSupplierRM" ADD CONSTRAINT "_RMToSupplierRM_B_fkey" FOREIGN KEY ("B") REFERENCES "SupplierRM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImportRmRequirementDetailToRM" ADD CONSTRAINT "_ImportRmRequirementDetailToRM_A_fkey" FOREIGN KEY ("A") REFERENCES "ImportRmRequirementDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImportRmRequirementDetailToRM" ADD CONSTRAINT "_ImportRmRequirementDetailToRM_B_fkey" FOREIGN KEY ("B") REFERENCES "RM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImportPODetailsToSupplierRM" ADD CONSTRAINT "_ImportPODetailsToSupplierRM_A_fkey" FOREIGN KEY ("A") REFERENCES "ImportPODetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImportPODetailsToSupplierRM" ADD CONSTRAINT "_ImportPODetailsToSupplierRM_B_fkey" FOREIGN KEY ("B") REFERENCES "SupplierRM"("id") ON DELETE CASCADE ON UPDATE CASCADE;
