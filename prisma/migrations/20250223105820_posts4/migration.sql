/*
  Warnings:

  - Made the column `views` on table `Posts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Posts` MODIFY `views` INTEGER NOT NULL DEFAULT 0;
