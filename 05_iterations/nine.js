// const myNums = [1, 2, 3]

// // const myTotal = myNums.reduce(function (acc, currval) {
// //     console.log(`acc: ${acc} and currval: ${currval}`);
// //     return acc + currval
// // }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);


const cart = [
            {
                itemName: "t-shirt",
               price: 299
             },
             {
                itemName: "charger",
               price: 999
             },
             {
                itemName: "adapter",
               price: 2999
             },
             {
                itemName: "speaker",
               price: 2999
             },
]

// const carttotal = cart.reduce((acc, cart) => cart.price + acc,0)
// console.log(carttotal);

const carttotal = cart.reduce((acc, cart ) => {
  return acc + cart.price
},0)
console.log(carttotal);