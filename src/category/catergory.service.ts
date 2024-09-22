import prisma from "../utils/prisma";

export const getCategoryService = async (name : string) => {
    return await prisma.category.findUnique({
        where: { name }
    });
};

export const getCategoriesService = async () => {
    return await prisma.category.findMany();
}

export const createCategoryService = async (categoryName: string) => {
    return await prisma.category.create({
        data: 
        {
            name: categoryName
        }
    });
};

export const updateCategoryService = async (id: number, name:string) => {
    return await prisma.category.update({
        where: { id },
        data: { 
            name 
        }
    });
};

export const deleteCategoryService = async (id: number) => {
    return await prisma.category.delete({
        where: { id }

    });
}   

