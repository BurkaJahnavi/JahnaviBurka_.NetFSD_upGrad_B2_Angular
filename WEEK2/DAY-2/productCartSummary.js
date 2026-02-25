const cart = [
    { name: "bag", price: 999, quantity: 1 },
    { name: "pens", price: 10, quantity: 10 },
    { name: "book", price: 50, quantity: 5 }
];

const pc = cart.map(function(num) {
    return num.price * num.quantity;
});

const total = pc.reduce((sum, num) => sum + num, 0);

console.log(total);