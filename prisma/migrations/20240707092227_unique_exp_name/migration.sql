/*
  Warnings:

  - A unique constraint covering the columns `[exp_name]` on the table `expenses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "expenses_exp_name_key" ON "expenses"("exp_name");
