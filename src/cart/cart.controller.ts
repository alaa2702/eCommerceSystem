import { Request, Response, NextFunction } from 'express';
import { getProductService } from '../products/products.servces';
import {updateStoce, getCartService, addNewItemToCartService,updateItemInCartService ,createCartService,deleteItemFromCartService } from './cart.services';

// Add a product to the user's cart
export const addToCart = async (req: Request, res: Response, next: NextFunction) => {
    const { productId, quantity } = req.body;
    const product = await getProductService(productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    const userId = req.user?.id;
    if (!userId) {  
        return res.status(401).json({ message: 'User not found' });
    }
    const cart = await getCartService(userId);
    if (!cart) {
        const newCart = await createCartService(userId);
        await addNewItemToCartService(productId, quantity, newCart.id);
        await updateStoce(productId, product.stock - quantity);
    } else {
        const cartItem = cart.cartItems.find((item) => item.productId === productId);
        if (cartItem) {
            const newAmount = cartItem.quantity + quantity;
            await updateItemInCartService(cartItem.id, newAmount);
            await updateStoce(productId, product.stock - quantity);
        } else {
            await addNewItemToCartService(productId, quantity, cart.id);
            await updateStoce(productId, product.stock - quantity);
        }
    }
    res.status(201).json({ message: 'Product added to cart' });
};

// // Update the quantity of a product in the user's cart
 export const updateCartItem = async (req: Request, res: Response, next: NextFunction) => {
        const { productId, amount } = req.body;
        const userId = (req as any).user?.id;
        const cart = await getCartService(userId);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        const cartItem = cart.cartItems.find((item) => item.productId === productId);
        if (!cartItem) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }
        await updateItemInCartService(cartItem.id, amount);
        res.status(200).json({ message: 'Cart item updated' });
  
 };

// Remove a product from the user's cart
export const removeFromCart = async (req: Request, res: Response, next: NextFunction) => {
    const { productId } = req.body;;
    const userId = (req as any).user?.id;
    const cart = await getCartService(userId);
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    const cartItem = cart.cartItems.find((item) => item.productId === productId);
    if (!cartItem) {
        return res.status(404).json({ message: 'Product not found in cart' });
    }
    const item = await deleteItemFromCartService(cartItem.id);
   
    res.status(200).json({ message: 'Product removed from cart' });
};

// Get the user's cart
export const getCart = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ message: 'User not found' });
    }
    const cart = await getCartService(userId);
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
};