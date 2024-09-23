//create cart service
import prisma from "../utils/prisma";

export const createCartService = async (id: number) => {
  const cart = await prisma.cart.create({
    data: {
      userId: id,
    },
  });
  return cart;
};
export const getCartService = async (userId: number) => {
    const cart = await prisma.cart.findUnique({
        where: { userId },
        include: { cartItems: true },
    });
    return cart;
    };

export const addNewItemToCartService = async (productId: number, quantity: number, cartId: number) => {
    await prisma.cartProduct.create({
      data: {
        cartId,  
        productId,
        quantity,

      },
    });
  
}
export const updateStoce = async (productId: number, quantity: number) => {
    await prisma.product.update({
      where: { id: productId },
      data: { stock: quantity },
    });
  };
  

export const updateItemInCartService = async (productId: number, quantity: number) => {
  await prisma.cartProduct.update({
    where: { id: productId },
    data: { quantity },
  });
};

export const deleteItemFromCartService = async (productId: number) => {
  await prisma.cartProduct.delete({
    where: { id: productId },
  });
};