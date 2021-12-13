var product_buy_butn = document.getElementsByClassName("product-buy-butn");
var counter_cart_products = document.getElementsByClassName("counter-cart-products");
var product_quantity_number = document.getElementsByClassName("product-quantity-number");
var product_value_number = document.getElementsByClassName("product-value-number");
var product_name = document.getElementsByClassName("product-name");
var product_quantity_form = document.getElementsByClassName("product-quantity-form");
var cart_product_grid_colunm = document.getElementsByClassName("cart-product-grid-colunm");

function update_cart_quantity() {
    let get_cart_quantity = localStorage.getItem("cart-quantity");
    counter_cart_products[0].innerHTML = get_cart_quantity;
}

function shows_cart_number() {
    if (counter_cart_products[0].innerHTML == "0") {
        counter_cart_products[0].style.display = "none";
    } else {
        counter_cart_products[0].style.display = "block";
    }
}

function add_cart_amount(i) {
    if (counter_cart_products[0].innerHTML == "") {
        let acumula = parseInt(product_quantity_number[i].value);
        counter_cart_products[0].innerHTML = acumula;
    } else {
        let acumula = parseInt(counter_cart_products[0].innerHTML) + parseInt(product_quantity_number[i].value);
        counter_cart_products[0].innerHTML = acumula;
    }
}
function add_in_local_storage(i) {
    let product = []
    if (localStorage.getItem("buying")) {
        product = localStorage.getItem(`buying`);
        product = JSON.parse(product);
        if (product.some(x=>x.name===`${product_name[i].innerHTML}`)) {
            product[product.findIndex(x=>x.name===`${product_name[i].innerHTML}`)].quantity = parseInt(product[product.findIndex(x=>x.name===`${product_name[i].innerHTML}`)].quantity) + parseInt(product_quantity_number[i].value);
            localStorage.setItem(`buying`, JSON.stringify(product));
        } else {
            product.name = product_name[i].innerHTML;
            product.value = product_value_number[i].innerHTML;
            product.quantity = product_quantity_number[i].value;
            product.push({ name: product.name, value: product.value, quantity: product.quantity })
            localStorage.setItem(`buying`, JSON.stringify(product));
        }
    } else {
        product.name = product_name[i].innerHTML;
        product.value = product_value_number[i].innerHTML;
        product.quantity = product_quantity_number[i].value;
        product.push({ name: product.name, value: product.value, quantity: product.quantity })
        localStorage.setItem(`buying`, JSON.stringify(product));
    }
}
function save_cart_quantity() {
    localStorage.setItem("cart-quantity", counter_cart_products[0].innerHTML);
}

for (let i = 0; i < product_buy_butn.length; i++) {
    product_buy_butn[i].addEventListener("click", () => {
        add_cart_amount(i);
        shows_cart_number();
        add_in_local_storage(i);
        save_cart_quantity();
    })
}

update_cart_quantity();
shows_cart_number();
add_cart_amount();


/*<div class="cart-product-container">
                            <div class="cart-product-picture-container">
                                <img src="static/assets/computador.png" alt="produto">
                            </div>
                            <div class="product-name-container">
                                <p class="cart-product-name">NOME</p>
                            </div>
                            <div class="product-value-container">
                                <p class="cart-product-value">VALOR TOTAL</p>
                            </div>
                            <div class="product-quantity-container">
                                <p action="" class="product-quantity-form">
                                    <button class="product-delete-butn">DELETAR</button>
                                </p>
                            </div>
                        </div>*/

