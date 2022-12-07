const productButtons: NodeList = document.querySelectorAll('button');
const shoppingCart: string[] = [];
const cart: HTMLElement = document.querySelector('#cart');

function updateCart(): void {
    document.querySelector('#productsInCart').textContent = shoppingCart.length.toString();
}

function addClickEvent(): void { // Void betyder att funktionen ej returnerar något värde
    productButtons.forEach((productButton) => {
        productButton.addEventListener('click', (event: MouseEvent) => {
            console.log('Du klickade på en knapp', event.target);
            const clickedElem: HTMLElement = event.target as HTMLElement; // För att kunna använda parentElement behöver vi göra om det till ett HTMLElement istället för typen EventTarget
            const productTitle: string = clickedElem.parentElement.getAttribute('data-product');
            shoppingCart.push(productTitle);
            console.log(shoppingCart);
            
            updateCart();
        });
    });
}

function listProductsInCart(): void {
    cart.innerHTML = '';

    shoppingCart.forEach((item) => {
        const elem: HTMLElement = document.createElement('li');
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