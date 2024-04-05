// Define type aliases for complex data types
type Product = {
    id: number;
    name: string;
    price: number;
};

type Order = {
    orderId: string;
    products: Product[];
    total: number;
};

const product1: Product = { id: 1, name: "Laptop", price: 999 };
const product2: Product = { id: 2, name: "Headphones", price: 99 };
const products: Product[] = [product1, product2];

const order: Order = {
    orderId: "ORD123",
    products: products,
    total: products.reduce((sum, product) => sum + product.price, 0)
};

function displayOrderDetails(order: Order): void {
    console.log("Order ID:", order.orderId);
    console.log("Products:");
    order.products.forEach(product => {
        console.log(`  - ${product.name}: $${product.price}`);
    });
    console.log("Total:", `$${order.total}`);
}

displayOrderDetails(order);
