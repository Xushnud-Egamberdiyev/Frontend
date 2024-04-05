var product1 = { id: 1, name: "Laptop", price: 999 };
var product2 = { id: 2, name: "Headphones", price: 99 };
var products = [product1, product2];
var order = {
    orderId: "ORD123",
    products: products,
    total: products.reduce(function (sum, product) { return sum + product.price; }, 0)
};
function displayOrderDetails(order) {
    console.log("Order ID:", order.orderId);
    console.log("Products:");
    order.products.forEach(function (product) {
        console.log("  - ".concat(product.name, ": $").concat(product.price));
    });
    console.log("Total:", "$".concat(order.total));
}
displayOrderDetails(order);
