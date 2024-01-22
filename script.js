function openMenu(){
    document.getElementById('header_menu').style.cssText = "color: black;";
    // document.getElementById('header_shopping_icon').style.cssText = "opacity: 0; position: absolute;";
    // document.getElementById('header_shopping_icon_black').style.cssText = "opacity: 1; position: reletive;";
    document.getElementById('header').style.cssText = "display: none;";
    document.getElementById('container').style.cssText = "display: none;";
    document.getElementById('menu_page').style.cssText = "display: flex";
    document.getElementById('shopping_cart_page').style.cssText = "display: none";
    document.getElementById('header_shopping_icon').style.cssText = "filter: invert(100%);";
}

function homePage(){
    document.getElementById('header_menu').style.cssText = "color: color;";
    // document.getElementById('header_shopping_icon').style.cssText = "opacity: 0; position: absolute;";
    // document.getElementById('header_shopping_icon_black').style.cssText = "opacity: 1; position: reletive;";
    document.getElementById('header').style.cssText = "display: block;";
    document.getElementById('container').style.cssText = "display: block;";
    document.getElementById('menu_page').style.cssText = "display: none";
    document.getElementById('shopping_cart_page').style.cssText = "display: none";
    document.getElementById('header_shopping_icon').style.cssText = "filter: invert(0%);";
}

function shoppingCart(){
    document.getElementById('header_menu').style.cssText = "color: black;";
    // document.getElementById('header_shopping_icon').style.cssText = "opacity: 0; position: absolute;";
    // document.getElementById('header_shopping_icon_black').style.cssText = "opacity: 1; position: reletive;";
    document.getElementById('header').style.cssText = "display: none;";
    document.getElementById('container').style.cssText = "display: none;";
    document.getElementById('menu_page').style.cssText = "display: none";
    document.getElementById('shopping_cart_page').style.cssText = "display: flex";
    document.getElementById('header_shopping_icon').style.cssText = "filter: invert(100%);";
}

function counterPlus(){
    document.getElementById('shopping_card_page_content1_item_counter_text').innerHTML = "02";
}