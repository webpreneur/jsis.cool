export const Query = {
    products: (parent, { filter: { onSale, avgRating} }, { products, reviews }) => {
        if ( !filter ) {
            return products;
        }
        let filteredProducts = products;
        if ( typeof onSale === "boolean" ) {
            filteredProducts = filteredProducts.filter(p => p.onSale === onSale );
        }
        if ( typeof avgRating === "number" ) {
            const getReviews = (productId) => {
                return reviews.filter(r => r.productId === productId);
            };
            filteredProducts = filteredProducts.filter(p => {
                getReviews(p.id).reduce(() => {})
            });
        }

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