   var dropdwn = document.getElementById("drop")
   dropdwn.addEventListener("click", showmenu)

   var drpdwnmenu = document.getElementById("dropdown-menu")

   function showmenu() {

       drpdwnmenu.style.display = "block"
       dropdwn.addEventListener("click", closemenu)

       function closemenu() {

           drpdwnmenu.style.display = "none"
           dropdwn.addEventListener("click", showmenu)
       }

   }




   var data = [{
       name: "LAKMÉ ABSOLUTE MATTE ULTIMATE LIP COLOR WITH ARGAN OIL",
       details: "Lakmé Absolute introduces a new Matte Ultimate Lip colour with Argan oil - a glamorous matte lipstick range suited for every occasion. From deep plum to fierce red, the collection comprises of 12 trendy shades with a lightweight formula enriched with luxe argan oil that nourishes your lips and keeps it from drying. Every bullet has a soft velvety matte texture that comfortably sits on your lips and provides a bold, intense color payoff. Sport a sensational pout with the ultimate matte lip color!",
       color: "PETAL PINK",
       howtouse: "Step 1: Create a cross on your cupid’s bow.<br> Step 2: Start applying from the centre of your upper lip.<br> Step 3: Work from the centre towards the outer edges of your lip, following the contours of your mouth and glide across your bottom lip.",
       price: "800",
       image: "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29158_H2_8901030857867_600x.jpg?v=1630499339"
   }];

   // var colordata = [{
   //         "RED": "#A62125"
   //     },
   //     {
   //         "BLUE": "#C11528"
   //     }, {
   //         "BLACK": "#C70136"
   //     }, {
   //         "GREEN": "yellow"
   //     },
   //     {
   //         "YELLOW": "yellow"
   //     }, {
   //         "PINK": "pink"
   //     }, {
   //         "GREY": "grey"
   //     }
   // ]
   // , "blue", "black", "green", "yellow", "pink", "grey"

   // for (var t = 0; t < colordata.length; t++) {
   //     for (key in colordata[t]) {
   //         console.log(colordata[t][key])
   //     }

   var btnquantity = document.getElementById("quantity");
   var count = 0;

   function increasequantity() {
       if (count >= 0) {
           count++;
           btnquantity.textContent = count
       }
   }

   function decreasequantity() {
       if (count >= 1) {
           count--;
           btnquantity.textContent = count
       }
   }
   // }

   var parent1 = document.getElementById("productimg");

   var imgs = document.createElement("img")
   imgs.className = "imgclass"

   function showProducts(d) {
       data.forEach(function (product) {
           var div = document.createElement("div");
           div.className = "divimage"

           let anchor = document.createElement("a")
           anchor.href = "../main/lakme.html"
           var para = document.createElement("p")

           para.textContent = "Home > " + product.name;
           anchor.append(para)
           imgs.src = product.image;

           imgs.style.height = "400px"
           imgs.style.width = "400px"
           imgs.style.marginLeft = "10%"



           div.append(anchor, imgs);
           parent1.append(div);
       })

   }

   function changeimg1() {
       imgs.src =
           "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29158_H2_8901030857867_600x.jpg?v=1630499339"
   }

   function changeimg2() {
       imgs.src =
           "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29163_H2_8901030857911_600x.jpg?v=1630500861"
   }

   function changeimg3() {
       imgs.src =
           "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29160_H2_8901030857881_600x.jpg?v=1630500562"
   }

   function changeimg4() {
       imgs.src =
           "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29160_H2_8901030857881_600x.jpg?v=1630500562"
   }

   function changeimg5() {
       imgs.src =
           "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/29164_H2_8901030857928_600x.jpg?v=1630500979"
   }


   showProducts()

   var parent2 = document.getElementById("nameprice")

   function showProductsdetails(d) {

       data.forEach(function (product1) {
           console.log(data)
           // var div = document.createElement("div");


           var para1 = document.createElement("p");
           para1.textContent = product1.name;
           para1.style.fontFamily = "DIN Neuzeit Grotesk, sans-serif";
           para1.style.fontWeight = "800"
           var productPrice = document.createElement("p");
           productPrice.textContent = "₹ " + product1.price;



           // div.style.paddingLeft = "20%"
           // div.style.marginLeft = "260px"
           parent2.append(para1, productPrice);
       })
   }
   showProductsdetails()
   // var colordetails = document.getElementById("colordetails");

   // function showcolor() {

   //     for (var i = 0; i < colordata.length; i++) {
   //         for (key in colordata[i]) {
   //             // var pickahsadetitle = document.createElement("p");
   //             // pickahsadetitle.textContent = "PICK A SHADE"
   //             // var pickashade = document.createElement("div");
   //             // pickashade.className = "pickshade"
   //             var element = document.createElement("div");
   //             element.className = "colorsbtn"
   //             element.style.backgroundColor = colordata[i][key];
   //             element.style.cursor = "pointer"
   //             element.style.height = "45px";
   //             element.style.width = "45px";

   //         }
   //         colordetails.append(element)

   //     }

   // }

   let addtobag = document.getElementById("addtobag")
   // addtobag.addEventListener("mouseenter", changecolor)
   //   addtobag.addEventListener("mouseleave", changecolor1)




   function changecolor() {
       addtobag.style.backgroundColor = "white"
       addtobag.style.color = "black"
   }

   function changecolor1() {
       addtobag.style.backgroundColor = "black"
       addtobag.style.color = "white"
   }
   var items = {}
   items.name = data[0].name;
   items.price = data[0].price;
   items.image = data[0].image;
   // console.log(count++)
   // items.units = btnquantity.textContent
   // console.log(items, "yhanks") 

   addtobag.addEventListener("click", add)

   function add() {








       if (localStorage.getItem("bag") === null) {
           localStorage.setItem("bag", JSON.stringify([]))
       }

       let product = JSON.parse(localStorage.getItem("bag"))

       product.push(items)


       localStorage.setItem("bag", JSON.stringify(product))

       increasequantity()
   }

   let add_wish_list = document.getElementById("wishlist")
   add_wish_list.addEventListener("click", addwish)

   let wishPops = document.getElementById('wishlistpop');
   wishPops.addEventListener('click', redirect);

   function redirect() {
       window.location.href = '../wishlist/wishlist.html';
   }

   function addwish() {

       if (localStorage.getItem("wish") === null) {
           localStorage.setItem("wish", JSON.stringify([]))
       }


       let prod = JSON.parse(localStorage.getItem("wish"))
       prod.push(items)


       localStorage.setItem("wish", JSON.stringify(prod))

       // console.log(prod)




   }