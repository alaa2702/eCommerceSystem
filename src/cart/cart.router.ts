//create cart router 
import Express from "express";

import { Router } from 'express';
import { authenticateToken } from '../middlewares/authenticateToken';
import { addToCart, updateCartItem, removeFromCart, getCart } from './cart.controller';

const cartRouter = Router();

// Add product to cart
cartRouter.post('cart/add', authenticateToken, addToCart);

// Update quantity of a product in cart
cartRouter.patch('cart/update', authenticateToken, updateCartItem);

// Remove product from cart
cartRouter.delete('cart/remove', authenticateToken, removeFromCart);

// Get user's cart
cartRouter.get('cart/', authenticateToken, getCart);

export default cartRouter;