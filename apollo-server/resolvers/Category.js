export const Category = {
    products: (parent, args, { products }) => {
        return products.filter(({ categoryId }) => categoryId === parent.id)
    }
};