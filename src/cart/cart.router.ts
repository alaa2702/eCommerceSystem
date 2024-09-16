//create cart router 
import Express from "express";

import { Router } from 'express';
import { authenticateToken } from '../middlewares/authenticateToken';
import { addToCart, updateCartItem, removeFromCart, getCart } from './cart.controller';

const cartRouter = Router();


cartRouter.post('/add', authenticateToken, addToCart);


cartRouter.patch('/update', authenticateToken, updateCartItem);


cartRouter.delete('/remove', authenticateToken, removeFromCart);

cartRouter.get('/', authenticateToken, getCart);

export default cartRouter;