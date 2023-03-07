/*
  Warnings:

  - You are about to drop the `bills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orderItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "menu" DROP CONSTRAINT "menu_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "orderItems" DROP CONSTRAINT "orderItems_menuId_fkey";

-- DropForeignKey
ALTER TABLE "orderItems" DROP CONSTRAINT "orderItems_orderId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_billId_fkey";

-- DropTable
DROP TABLE "bills";

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "menu";

-- DropTable
DROP TABLE "orderItems";

-- DropTable
DROP TABLE "orders";

-- CreateTable
CREATE TABLE "accident" (
    "id" INTEGER NOT NULL,
    "deadyearBudha" INTEGER,
    "deadyear" INTEGER,
    "age" INTEGER,
    "sex" INTEGER,
    "deadDate" DATE,
    "province" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "icd10" TEXT,
    "vehicle" TEXT,

    CONSTRAINT "accident_pkey" PRIMARY KEY ("id")
);
