export const Query = {
    products: (parent, args, { products }) => {
        return products;
    },
    product: (parent, args, { products }) => {
        return products.find(({id}) => id === args.id);
    },
    categories: () => {
        return categories;
    },
    category: (p, args, { categories }) => {
        return categories.find(({ id }) => id === args.id)
    },
    reviews: (p, a, { reviews }) => {
        return reviews;
    },
    review: (p, args, { reviews }) => {
        return reviews.find(({ id }) => id === args.id);
    }
};