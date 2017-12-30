let orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

// Usig high-order function reduce
let total_amount = orders.reduce((sum, order) => sum += order.amount, 0)

// Using for loop for comparison
let total_amount2 = 0;
for (let i = 0; i < orders.length; i++) {
    total_amount2 += orders[i].amount
}

console.log("High-order Function:", total_amount);
console.log("Loop:", total_amount2);
