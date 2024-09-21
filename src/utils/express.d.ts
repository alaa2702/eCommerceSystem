import { Request } from "express";

declare module "express" {
  export interface Request {
    user?: {
      id: number;
      role: string;
      // Add other user properties here if needed
    };
  }
}