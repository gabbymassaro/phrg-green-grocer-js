let cart = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}}
]


const consolidateCart = (cart) => {

  let newCart = []
  cart.forEach(item => {
    let productName = Object.keys(item)
    newCart.push(productName)
  })
  console.log(newCart)
}


const applyCoupons = (cart, coupons) => {
  // code here
}

const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}

consolidateCart(cart)
