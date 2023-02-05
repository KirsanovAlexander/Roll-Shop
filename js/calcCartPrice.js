function calcCartPrice(){

    const cartItems = document.querySelector('.cart-item');

    let totalPrice = 0;

    cartItems.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    })
    console.log(totalPrice);
}