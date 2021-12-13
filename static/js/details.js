var product_details = document.getElementsByClassName("product-details")
var product_click_icon = document.getElementsByClassName("product-click-icon")
var cart_product_grid_colunm = document.getElementsByClassName("cart-product-grid-colunm")
var details = [{description: "Exemplo1"},{description: "Exemplo2"},{description: "Exemplo3"},
            {description: "Exemplo4"},{description: "Exemplo5"},{description: "Exemplo6"},
            {description: "Exemplo7"},{description: "Exemplo8"},{description: "Exemplo9"}]

function create_div(i){
    var new_div = document.createElement("div")
    new_div.className="product-container"
    var text_node = document.createTextNode(details[i].description)
    new_div.appendChild(text_node)
    cart_product_grid_colunm[0].append(new_div)    
}

function remove_div(){
    let product_container = document.getElementsByClassName("product-container")
    cart_product_grid_colunm[0].removeChild(product_container[9])
}

for (let i = 0; i < product_click_icon.length; i++) {
    product_click_icon[i].addEventListener("mouseover", () => {
        create_div(i);    
    })
    product_click_icon[i].addEventListener("mouseout", () => {  
        remove_div();
    })
}