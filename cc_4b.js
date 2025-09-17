// Coding Challenge 04b

// Step 2
let products = [
    {sku: 'I-344', name: 'Almond Milk', category: 'Groceries', price: 3.99, inventory: 35,},
    {sku: 'I-101', name: 'Macbook Air', category: 'Electronics', price: 6.79, inventory: 20,},
    {sku: 'I-75', name: 'Crop top', category: 'Apparel', price: 12.99, inventory: 50,},
    {sku: 'I-04', name: 'Apple Pencil', category: 'Electronics', price: 5.50, inventory: 52,},
    {sku: 'I-198', name: 'Tomatoes', category: 'Groceries', price: 4.99, inventory: 30,},
];


// Step 3
for (let products in products) {
    let discount
    
    switch (products.category) {
        case 'Electronics':
            discount = .2
            break;
        case 'Groceries':
            discount = .10
            break;
        case 'Apparel':
            discount = .15
            break;
        default:
            discount = 0
    }

let promoPrice = products.price - (products.price * discount);
products.promoPrice = promoPrice.toFixed(2);

}


// Step 4
let customerType = ['Student', 'Senior']
console.log(customerType);

let subtotal
if (customerType = 'Student') {
  subtotal = subtotal - (subtotal * .05);
} else {
    console.log(`Student Discount does not apply to order. Your order total is: ${subtotal}`);
}

if (customerType = 'Senior') {
  subtotal = subtotal - (subtotal * .07);    
} else {
    console.log(`Senior Discount does not apply to order. Your order total is: ${subtotal}`);
}


// Step 6

let cart1 = [
    {sku: 'I-344', qty: 2},
    {sku: 'I-101', qty: 1},
    {sku: 'I-75', qty: 1},
];
