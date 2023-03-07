-- CreateTable
CREATE TABLE "accident" (
    "id" INTEGER NOT NULL,
    "deadyearBudha" INTEGER,
    "deadyear" INTEGER,
    "age" INTEGER,
    "sex" INTEGER,
    "deadDate" TIMESTAMP(3),
    "province" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "icd10" TEXT,
    "vehicle" TEXT,

    CONSTRAINT "accident_pkey" PRIMARY KEY ("id")
);
