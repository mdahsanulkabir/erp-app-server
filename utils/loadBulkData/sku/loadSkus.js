const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const mySQUs = [
    {
        skuCode: "SRREF-SINGER-BCD-178R-BG",
        productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
        productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
        productCapacity: 178,
        seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-178R-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 178,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198F",
     productVariantId: "84bc0582-dc56-429d-8cf9-be2a9cad72e4",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "af234855-00d0-4996-be87-5aa8812a00aa"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198F-DRS",
     productVariantId: "fbcb0728-8a8e-4447-8a75-4180e45e5195",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "af234855-00d0-4996-be87-5aa8812a00aa"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198I-BVS",
     productVariantId: "b53c3864-5ce9-40b0-8c44-30032331753d",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198I-DRS",
     productVariantId: "fbcb0728-8a8e-4447-8a75-4180e45e5195",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198I-GMF",
     productVariantId: "b68b3d5c-c9cc-4316-8cba-d1d889c55441",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198I",
     productVariantId: "84bc0582-dc56-429d-8cf9-be2a9cad72e4",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198R-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198R",
     productVariantId: "84bc0582-dc56-429d-8cf9-be2a9cad72e4",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198R-NG",
     productVariantId: "b0d66ffe-55fd-4e87-a2e6-e75a6009140c",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198R-PG",
     productVariantId: "f655d462-5d0d-46f6-be12-7c001350af23",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-198R-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-PRO-198R-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-PRO-198R-NG",
     productVariantId: "b0d66ffe-55fd-4e87-a2e6-e75a6009140c",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-PRO-198R-PG",
     productVariantId: "f655d462-5d0d-46f6-be12-7c001350af23",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 198,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-208I-BVS",
     productVariantId: "b53c3864-5ce9-40b0-8c44-30032331753d",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 208,
     seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
    },
    {
     skuCode: "SRREF-SINGER-BCD-208I-DRS",
     productVariantId: "fbcb0728-8a8e-4447-8a75-4180e45e5195",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 208,
     seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
    },
    {
     skuCode: "SRREF-SINGER-BCD-208I-GMF",
     productVariantId: "b68b3d5c-c9cc-4316-8cba-d1d889c55441",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 208,
     seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
    },
    {
         skuCode: "SRREF-SINGER-BCD-208I",
         productVariantId: "84bc0582-dc56-429d-8cf9-be2a9cad72e4",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 208,
         seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
        },
        {
         skuCode: "SRREF-SINGER-BCD-208I-RMF",
         productVariantId: "b68b3d5c-c9cc-4316-8cba-d1d889c55441",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 208,
         seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
        },
        {
         skuCode: "SRREF-SINGER-BCD-208I-OMF",
         productVariantId: "b68b3d5c-c9cc-4316-8cba-d1d889c55441",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 208,
         seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
        },
        {
         skuCode: "SRREF-SINGER-BCD-208R-BG",
         productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 208,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-BCD-208R-GG",
         productVariantId: "bdf12aa8-bf62-4c1a-a4df-a4bcef3186e1",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 208,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-BCD-208R",
         productVariantId: "84bc0582-dc56-429d-8cf9-be2a9cad72e4",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 208,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-BCD-208R-NG",
         productVariantId: "b0d66ffe-55fd-4e87-a2e6-e75a6009140c",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 208,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-BCD-208R-RG",
         productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 208,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-PRO-212R-BG",
         productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 212,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-PRO-212R-GRG",
         productVariantId: "b68b3d5c-c9cc-4316-8cba-d1d889c55441",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 212,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-PRO-212R-PG",
         productVariantId: "f655d462-5d0d-46f6-be12-7c001350af23",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 212,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-PRO-212R-RG",
         productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 212,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218F-DRS",
         productVariantId: "fbcb0728-8a8e-4447-8a75-4180e45e5195",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 218,
         seriesCategoryId: "af234855-00d0-4996-be87-5aa8812a00aa"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218F",
         productVariantId: "84bc0582-dc56-429d-8cf9-be2a9cad72e4",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 218,
         seriesCategoryId: "af234855-00d0-4996-be87-5aa8812a00aa"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218F-OMF",
         productVariantId: "b68b3d5c-c9cc-4316-8cba-d1d889c55441",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 218,
         seriesCategoryId: "af234855-00d0-4996-be87-5aa8812a00aa"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218I-BVS",
         productVariantId: "b53c3864-5ce9-40b0-8c44-30032331753d",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 218,
         seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218I-DRS",
         productVariantId: "fbcb0728-8a8e-4447-8a75-4180e45e5195",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 218,
         seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218I-GMF",
         productVariantId: "b68b3d5c-c9cc-4316-8cba-d1d889c55441",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 218,
         seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218I",
         productVariantId: "84bc0582-dc56-429d-8cf9-be2a9cad72e4",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 218,
         seriesCategoryId: "b0bcb5fc-5baa-45ee-ae7c-842bb0d81aec"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218R-BG",
         productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 218,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218R-BJY",
         productVariantId: "08c04d9b-4d30-4439-91ec-8ce9d7e588da",
         productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
         productCapacity: 218,
         seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
        },
        {
         skuCode: "SRREF-SINGER-BCD-218R-GG",
         productVariantId: "bdf12aa8-bf62-4c1a-a4df-a4bcef3186e1",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 218,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-218R",
     productVariantId: "84bc0582-dc56-429d-8cf9-be2a9cad72e4",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 218,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-218R-NG",
     productVariantId: "b0d66ffe-55fd-4e87-a2e6-e75a6009140c",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 218,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-218R-PG",
     productVariantId: "f655d462-5d0d-46f6-be12-7c001350af23",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 218,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-218R-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 218,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-243R-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 243,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-243R-BJY",
     productVariantId: "08c04d9b-4d30-4439-91ec-8ce9d7e588da",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 243,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-243R-DGG",
     productVariantId: "04d708d6-923f-4e19-b203-eb84b4bd82a3",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 243,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-243R-GG",
     productVariantId: "bdf12aa8-bf62-4c1a-a4df-a4bcef3186e1",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 243,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-243R-NG",
     productVariantId: "b0d66ffe-55fd-4e87-a2e6-e75a6009140c",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 243,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-243R-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 243,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-273R-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 273,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-273R-DGG",
     productVariantId: "04d708d6-923f-4e19-b203-eb84b4bd82a3",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 273,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-273R-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 273,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-333R-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 333,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-333R-DBG",
     productVariantId: "4e6e2a69-f014-4196-b588-052c30b6d987",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 333,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-333R-DGG",
     productVariantId: "04d708d6-923f-4e19-b203-eb84b4bd82a3",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 333,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-333R-DRG",
     productVariantId: "de7b90aa-ea05-4fb0-baee-2df7c9499250",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 333,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-333R-MBG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 333,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-333R-MNG",
     productVariantId: "b0d66ffe-55fd-4e87-a2e6-e75a6009140c",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 333,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-333R-MPG",
     productVariantId: "f655d462-5d0d-46f6-be12-7c001350af23",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 333,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-333R-MRG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 333,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-BCD-333R-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 333,
     seriesCategoryId: "94dfd55c-70f7-4031-bcab-1103c9c0f945"
    },
    {
     skuCode: "SRREF-SINGER-FF2-55",
     productVariantId: "97fba4d4-1625-4a0a-b452-32944d9edd9b",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 20,
     seriesCategoryId: "d38e3069-55a5-47f7-aaf0-404e77631910"
    },
    {
     skuCode: "SRREF-SINGER-FF2-69",
     productVariantId: "b68b3d5c-c9cc-4316-8cba-d1d889c55441",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 20,
     seriesCategoryId: "d38e3069-55a5-47f7-aaf0-404e77631910"
    },
    {
     skuCode: "SRREF-SINGER-FF2-69BI",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 20,
     seriesCategoryId: "d38e3069-55a5-47f7-aaf0-404e77631910"
    },
    {
     skuCode: "SRREF-SINGER-FF2-69D",
     productVariantId: "97fba4d4-1625-4a0a-b452-32944d9edd9b",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 20,
     seriesCategoryId: "d38e3069-55a5-47f7-aaf0-404e77631910"
    },
    {
     skuCode: "SRREF-SINGER-FF2-69D-BI",
     productVariantId: "97fba4d4-1625-4a0a-b452-32944d9edd9b",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 20,
     seriesCategoryId: "d38e3069-55a5-47f7-aaf0-404e77631910"
    },
    {
     skuCode: "SRREF-SS100-FTDS230V",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 230,
     seriesCategoryId: "f54a50e8-48e4-4eff-a1af-1b6f203c1574"
    },
    {
     skuCode: "SRREF-SS300-FTDS230-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 230,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS300-FTDS230-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 230,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS500-FTDS230Z-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 230,
     seriesCategoryId: "f625efbe-8882-4335-8a55-f5e1bb989c20"
    },
    {
     skuCode: "SRREF-SS500-FTDS230Z-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 230,
     seriesCategoryId: "f625efbe-8882-4335-8a55-f5e1bb989c20"
    },
    {
     skuCode: "SRREF-SS100-FBDS260V",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 260,
     seriesCategoryId: "f54a50e8-48e4-4eff-a1af-1b6f203c1574"
    },
    {
     skuCode: "SRREF-SS300-FBDS260-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 260,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS300-FBDS260-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 260,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS500-FBDS260Z-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 260,
     seriesCategoryId: "f625efbe-8882-4335-8a55-f5e1bb989c20"
    },
    {
     skuCode: "SRREF-SS500-FBDS260Z-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 260,
     seriesCategoryId: "f625efbe-8882-4335-8a55-f5e1bb989c20"
    },
    {
     skuCode: "SRREF-SS100-FTDS185V",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 185,
     seriesCategoryId: "f54a50e8-48e4-4eff-a1af-1b6f203c1574"
    },
    {
     skuCode: "SRREF-SS300-FTDS185-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 185,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS300-FTDS185-BUG",
     productVariantId: "47c7edcd-5aeb-4e78-9d71-10cae42e7fc5",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 185,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS100-FTDS155V",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 155,
     seriesCategoryId: "f54a50e8-48e4-4eff-a1af-1b6f203c1574"
    },
    {
     skuCode: "SRREF-SS300-FTDS155-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 155,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS300-FTDS155-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 155,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS100-FTDS200V",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 200,
     seriesCategoryId: "f54a50e8-48e4-4eff-a1af-1b6f203c1574"
    },
    {
     skuCode: "SRREF-SS300-FTDS200-BUG",
     productVariantId: "47c7edcd-5aeb-4e78-9d71-10cae42e7fc5",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 200,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS300-FTDS200-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 200,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS100-FBDS185V",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 185,
     seriesCategoryId: "f54a50e8-48e4-4eff-a1af-1b6f203c1574"
    },
    {
     skuCode: "SRREF-SS300-FBDS185-RG",
     productVariantId: "38e7bfe6-8ccd-4c69-b0cd-560147358751",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 185,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    },
    {
     skuCode: "SRREF-SS300-FBDS185-BG",
     productVariantId: "3d0abdf0-2a11-4377-8999-342125947514",
     productBaseId: "23d83609-63a2-4ef2-bd74-44df007a09dd",
     productCapacity: 185,
     seriesCategoryId: "b3850b17-dad6-4e89-8c95-ab3ef77747b0"
    }
];




const printSkus = async (req, res) => {
    try {
        
        res.status(200).json(mySQUs)
    } catch (err) {
        console.log(err)
    }
}

const createManySKUs = async (req, res) => {
    const skuData = mySQUs.map(({
      skuCode,
      productVariantId,
      productBaseId,
      productCapacity,
      seriesCategoryId
    }) => ({
      skuCode,
      variant: {
        connect: {
          id: productVariantId,
        },
      },
      productBase: {
        connect: {
          id: productBaseId,
        },
      },
      productCapacity: parseInt(productCapacity),
      SeriesCategory: {
        connect: {
          id: seriesCategoryId,
        },
      },
    }));
  
    try {
      const newSKUs = await prisma.sKU.createMany({
        data: skuData,
      });
  
      console.log({ newSKUs });
      res.status(201).json({
        success: `New Product SKUs created!`,
        newSKUs,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {
    printSkus,
    createManySKUs
};