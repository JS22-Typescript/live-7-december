const productButtons = document.querySelectorAll('button');
const shoppingCart = [];
const cart = document.querySelector('#cart');
function updateCart() {
    document.querySelector('#productsInCart').textContent = shoppingCart.length.toString();
}
function addClickEvent() {
    productButtons.forEach((productButton) => {
        productButton.addEventListener('click', (event) => {
            console.log('Du klickade på en knapp', event.target);
            const clickedElem = event.target; // För att kunna använda parentElement behöver vi göra om det till ett HTMLElement istället för typen EventTarget
            const productTitle = clickedElem.parentElement.getAttribute('data-product');
            shoppingCart.push(productTitle);
            console.log(shoppingCart);
            updateCart();
        });
    });
}
function listProductsInCart() {
    cart.innerHTML = '';
    shoppingCart.forEach((item) => {
        const elem = document.createElement('li');
        elem.innerText = item;
        elem.classList.add('product-title');
        cart.append(elem);
    });
}
document.querySelector('#open-cart').addEventListener('click', () => {
    document.querySelector('#cart').classList.toggle('hide');
    listProductsInCart();
});
addClickEvent();
