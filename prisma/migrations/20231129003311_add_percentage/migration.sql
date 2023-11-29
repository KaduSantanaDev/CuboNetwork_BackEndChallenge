/*
  Warnings:

  - Added the required column `percentage` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `percentage` DECIMAL NOT NULL;
