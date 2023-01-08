export const Product = {
    category: (parent, args, { categories }) => {
        return categories.find(({ id }) => id === parent.categoryId)
    },
    reviews: ({ id }, args, { reviews }) => {
        return reviews.filter(({ productId }) => productId === id);
    }
};