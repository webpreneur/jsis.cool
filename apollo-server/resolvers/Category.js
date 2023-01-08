export const Category = {
    products: (parent, { filter }, { products }) => {
        if ( !filter ) {
            return products.filter(({ categoryId }) => categoryId === parent.id);
        }
        return products.filter(({ categoryId, onSale }) => {
            return categoryId === parent.id && onSale === filter.onSale;
        });
    }
};