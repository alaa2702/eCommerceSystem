import prisma from "../utils/prisma";

export const createReviewService = async (userId: number, productId: number, rating: number,comment: string) => {
    const review = await prisma.review.create({
        data: {
            userId,
            productId,
            rating,
            comment
        }
    });
    return review;
};
export const getReviewService = async (id:number) => {
    const reviews = await prisma.review.findMany({
        where: {
            id
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            }
        
    });
    return reviews;
};export const getReviewsService = async () => {
    const reviews = await prisma.review.findMany({
        select: {
            id: true,
            rating: true,
            comment: true,
            product: {
                select: {
                    name: true,
                }
            },
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                }
            }
        }
    });
        
    return reviews;
};
export const getReviewsOfProductService = async (productId: number) => {
    const reviews = await prisma.review.findMany({
        where: {
            productId,
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                }
            }
        }
                
        
    });

    return reviews;
};
export const deleteReviewService = async (userId: number, productId: number) => {
    const review = await prisma.review.delete({
        where: {
            userId_productId: {  // Use the composite key here
                userId,
                productId,
            }
        }
    });

    return review;
};

export const deleteReviewbyAdminService = async (id: number) => {
    const review = await prisma.review.delete({
    where: {
    id,
    },
});
return review;};
