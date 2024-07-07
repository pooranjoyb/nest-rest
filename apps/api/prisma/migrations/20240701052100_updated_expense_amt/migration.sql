/*
  Warnings:

  - Changed the type of `exp_amt` on the `expenses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "exp_amt",
ADD COLUMN     "exp_amt" INTEGER NOT NULL;
