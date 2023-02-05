function toggleCartStatus(){

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');


    //Показать/Убрать статус Корзина пуста
    //Показать/Убрать блок Оформить заказ
    if(cartWrapper.children.length>0){
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    }else{
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }



}