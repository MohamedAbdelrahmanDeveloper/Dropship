
export const productsTotal = (products) => {
    return products.reduce((total, product) => {
        const productsTotal = total + product.total
        return productsTotal
      }, 0);
}