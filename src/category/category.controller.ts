
import { Request, Response } from 'express';
import { createCategoryService, getCategoryService, updateCategoryService, deleteCategoryService,getCategoriesService } from './catergory.service';

export const createCategoryController = (req: Request, res: Response) => {
    const { name } = req.body;
    const category = createCategoryService(name);
    if (!category) {
        return res.status(404).json({ message: 'Category not created' });
    }
    
    res.status(201).json(category);

};
export const getCategoryController = (req: Request, res: Response) => {
    const { name } = req.body;
    const category = getCategoryService(name);
    if (!category) {
        return res.status(404).json({ message: 'The category is not found' });
    }
    res.status(200).json(category);

};
export const getCategoriesController = (req: Request, res: Response) => {
    const categories = getCategoriesService();
    if (!categories) {
        return res.status(404).json({ message: 'There is no category' });
    }
    res.status(200).json(categories);
};

export const updateCategoryController = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const category = updateCategoryService(Number(id), name);
    if (!category) {
        return res.status(404).json({ message: 'Category not updated' });
    }
    
    res.status(200).json(category);
};
export const deleteCategoryController = (req: Request, res: Response) => {
    const { id } = req.params;
    const category = deleteCategoryService(Number(id));
    if (!category) {
        return res.status(404).json({ message: 'Category not deleted' });
    }
    res.status(200).json(category);
    
};

