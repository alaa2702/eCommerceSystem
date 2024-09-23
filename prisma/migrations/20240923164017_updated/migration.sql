/*
  Warnings:

  - A unique constraint covering the columns `[wishlistId,productId]` on the table `WishlistProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WishlistProduct_wishlistId_productId_key" ON "WishlistProduct"("wishlistId", "productId");
