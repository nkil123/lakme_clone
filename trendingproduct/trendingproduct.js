 // <button class="viewshades">VIEW SHADES</button>

 var data = [{
         image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29158_H2_8901030857867_300x.jpg?v=1630501152",
         newtag: "NEW",
         name: "LAKME LIMITED EDITION LIP COLORS",
         price: " 800",
         shades: "25 Shades"
     }, {
         image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29113_H1-8901030851667_300x.jpg?v=1630492665",
         newtag: "NEW",
         name: "LAKME LIMITED EDITION LIP COLORS",
         price: " 200",
         shades: "25 Shades"
     }, {
         image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29036_H1_8901030837005_300x.jpg?v=1623388003",
         newtag: "NEW",
         name: "LAKME LIMITED EDITION LIP COLORS",
         price: " 500",
         shades: "25 Shades"
     }, {
         image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24990_H2-8901030817496_300x.jpg?v=1620115073",
         newtag: "NEW",
         name: "LAKME LIMITED EDITION LIP COLORS",
         price: " 3700",
         shades: "25 Shades"
     }, {
         image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/2_1_300x.jpg?v=1618213425",
         newtag: "NEW",
         name: "LAKME LIMITED EDITION LIP COLORS",
         price: " 200",
         shades: "25 Shades"
     }, {
         image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1_tropical-beach---red-boots_300x.jpg?v=1615869721",
         newtag: "NEW",
         name: "LAKME LIMITED EDITION LIP COLORS",
         price: " 1100",
         shades: "25 Shades"
     }, {
         image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/2-fop-smokin-glam_1_300x.jpg?v=1617283284",
         newtag: "NEW",
         name: "LAKME LIMITED EDITION LIP COLORS",
         price: " 11100",
         shades: "25 Shades"
     }, {
         image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24704_H-8901030776533_300x.jpg?v=1612938317",
         newtag: "NEW",
         name: "LAKME LIMITED EDITION LIP COLORS",
         price: " 10",
         shades: "25 Shades"
     }, {
         image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1.27308_H-8901030781551_d3bb1014-49d6-41e9-8921-f68d7d9dbf2a_300x.jpg?v=1600872071",
         newtag: "NEW",
         name: "LAKME LIMITED EDITION LIP COLORS",
         price: " 670",
         shades: "25 Shades"
     },



 ];
 let parent = document.getElementById("productdetails");


 function showProducts(d) {

     parent.innerHTML = null;
     data.forEach(function (product) {
         let div = document.createElement("div");
         div.className = "fade"
         var icon = document.createElement("i")
         icon.className = "far fa-heart wishlist";

         icon.onclick = function () {
             addiconproduct(product);
             icon.style.background = "red"
         };

         let img = document.createElement("img");

         img.src = product.image;
         // img.style.height = "300px"
         let product_newtag = document.createElement("p");
         product_newtag.className = "newtag"

         product_newtag.textContent = product.newtag;

         let product_name = document.createElement("p");
         product_name.textContent = product.name;
         product_name.className = "productname"


         let product_price = document.createElement("p");
         product_price.textContent = "₹" + product.price;

         let product_shade = document.createElement("p");
         product_shade.textContent = product.shades
         product_shade.style.fontSize = "13px"

         let product_btn = document.createElement("button");
         product_btn.textContent = "VIEW SHADES";
         product_btn.className = "productbtn"

         div.append(icon, img, product_newtag, product_name, product_price, product_shade, product_btn);

         parent.append(div);
     });
 }
 showProducts();

 function lowtohigh() {


     let arr = data.sort(function (a, b) {

         return a.price - b.price;
     })

     showProducts(arr);
 }

 function hightolow() {


     let arr = data.sort(function (a, b) {

         return b.price - a.price;
     })

     showProducts(arr);
 }

 if (localStorage.getItem("wishlist") === null) {
     localStorage.setItem("wishlist", JSON.stringify([]));
 }

 function addiconproduct(p) {
     let products_cart = JSON.parse(localStorage.getItem("wishlist"));

     products_cart.push(p);

     localStorage.setItem("wishlist", JSON.stringify(products_cart));


 }