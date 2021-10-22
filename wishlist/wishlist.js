   var parent = document.getElementById("shoppingcart");
   var carti = JSON.parse(localStorage.getItem("wishlist"));
   var count = 0;

   function showProducts(d) {
       carti.forEach(function (product) {



           count++
           let div = document.createElement("div");
           div.className = "wishlishtdiv"
           var icon = document.createElement("i")
           icon.className = "fas fa-heart wishlisticon";

           let img = document.createElement("img");

           img.src = product.image;

           let product_name = document.createElement("p");
           product_name.innerHTML = product.name;

           let product_price = document.createElement("p");
           product_price.innerHTML = product.price;





           div.append(icon, img, product_name, product_price)

           parent.append(div);

       })
   }
   showProducts()