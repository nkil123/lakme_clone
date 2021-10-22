// adding eventlistner to the ham icon

let hambutton = document.querySelector('.openMenu');

hambutton.addEventListener('click', openss);

// opens the hamburgur

function openss() {
    // create elements required in the nav bar
    let nav = document.createElement('nav');
    nav.id = 'nav';
    let closer = document.createElement('div');
    closer.className = 'closeMenu';

    // this icon is used to close the navigatoin bar
    let ham = document.createElement('i');
    ham.className = 'fa fa-times';
    ham.style.color = 'white';
    closer.append(ham);

    // adding functonality and redirecting to another function to close the  nav
    ham.onclick = function() {
        closeall();
    };

    let ul = document.createElement('ul');
    ul.className = 'mainMenu';

    let li1 = document.createElement('li');
    let home = document.createElement('a');
    home.href = 'lakme.html';
    home.innerHTML = 'HOME';
    li1.appendChild(home);

    let li2 = document.createElement('li');
    let siOrReg = document.createElement('a');
    siOrReg.href = '#';
    siOrReg.innerHTML = 'SIGN IN OR REGISTER';
    li2.appendChild(siOrReg);

    let li3 = document.createElement('li');
    let yourOrder = document.createElement('a');
    yourOrder.href = '#';
    yourOrder.innerHTML = 'YOUR ORDER';
    li3.appendChild(yourOrder);

    let li4 = document.createElement('li');
    let bestDsales = document.createElement('a');
    bestDsales.href = '../sale/sale.html';
    bestDsales.innerHTML = 'BEST DEALS/SALES';
    li4.appendChild(bestDsales);

    let li5 = document.createElement('li');
    let makeUp = document.createElement('a');
    makeUp.href = '#';
    makeUp.innerHTML = 'MAKEUP';
    li5.appendChild(makeUp);

    let li6 = document.createElement('li');
    let skinCare = document.createElement('a');
    skinCare.href = '#';
    skinCare.innerHTML = 'SKIN CARE';
    li6.appendChild(skinCare);

    let li7 = document.createElement('li');
    let collections = document.createElement('a');
    collections.href = '../makeup/makeup.html';
    collections.innerHTML = 'TRENDS';
    li7.appendChild(collections);

    let li8 = document.createElement('li');
    let findYMatch = document.createElement('a');
    findYMatch.href = '#';
    findYMatch.innerHTML = 'FIND YOUR MATCH';
    li8.appendChild(findYMatch);

    let li9 = document.createElement('li');
    let trending = document.createElement('a');
    trending.href = '../trendingproduct/trendingproduct.html';
    trending.innerHTML = 'TRENDING';
    li9.appendChild(trending);

    let li10 = document.createElement('li');
    let getTheLook = document.createElement('a');
    getTheLook.href = '#';
    getTheLook.innerHTML = 'GET THE LOOK';
    li10.appendChild(getTheLook);

    let li11 = document.createElement('li');
    let joinTheClub = document.createElement('a');
    joinTheClub.href = '#';
    joinTheClub.innerHTML = 'JOIN THE CLUB';
    li11.appendChild(joinTheClub);

    ul.append(li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11);
    nav.append(closer, ul);
    document.body.append(nav);
    console.log(nav);
}

// function to close the navbar

function closeall() {
    console.log('hi');

    let nav = document.getElementById('nav');
    console.log(nav);
    nav.remove();
    // console.log(nav);
}

var searchbtn = document.getElementById('searchi');

searchbtn.addEventListener('click', searchbar);

// note this method is better than the one used for hamburrger menu

function searchbar() {
    let bar = document.getElementById('searchBar');

    if (bar.style.visibility === 'hidden') {
        bar.style.visibility = 'visible';
    } else {
        bar.style.visibility = 'hidden';
    }
}

// console.log('HIII');
// let srch = document.getElementById('searchBar');
// console.log(sea);
// srch.remove();
// console.log(bar);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

// this is related to cart

let cartOpen = document.getElementById('cart_open');
let cartSideBar = document.getElementById('cart');
let cartClose = document.getElementById('cart_close');

console.log(cartOpen, cartSideBar, cartClose);

cartOpen.onclick = function() {
    add_to_bag();
    cartSideBar.style.right = '0';
    cartSideBar.style.visibility = 'visible';
};

cartClose.onclick = function() {
    cartSideBar.style.right = '-500px';
    cartSideBar.style.visibility = 'hidden';
};

// when add to cart functionality is pressed

// Image,name,Price,
let cart_items = document.querySelector('.all_cart_items ');
console.log(cart_items, 'cart_items');
let bag_items = JSON.parse(localStorage.getItem('bag'));
console.log(bag_items, 'cart_items');

var total = 0;

function add_to_bag() {
    if (bag_items === [] || bag_items === null) {
        let empty_bag = document.createElement('div');
        let h1 = document.createElement('h1');
        h1.innerHTML = 'Bag is empty';
        empty_bag.append(h1);
        cart_items.append(empty_bag);
        return;
    }

    bag_items.forEach(element => {
        function display() {
            let divwcart = document.createElement('div');
            divwcart.className = 'c_items';

            let divwcart_image = document.createElement('div');
            divwcart_image.className = 'c_image';

            let divwcart_image_img = document.createElement('img');
            divwcart_image_img.src = element.image;

            divwcart_image.append(divwcart_image_img);

            let divwcart_text = document.createElement('div');
            divwcart_text.className = 'c_text';

            let text_name = document.createElement('p');
            text_name.className = 'name';
            text_name.innerHTML = element.name;

            let text_price = document.createElement('p');
            text_price.className = 'price';
            text_price.innerHTML = element.price;
            total = total + Number(element.price);

            let text_shadesno = document.createElement('p');
            text_shadesno.className = 'shadesno';
            text_shadesno.innerHTML = ' 25 Shades';

            let cart_funct = document.createElement('div');
            cart_funct.className = 'cart_functions';

            let quantity_add = document.createElement('div');
            quantity_add.className = 'quantity_adder';

            let qa_btn = document.createElement('button');
            qa_btn.className = 'dec_btn';
            qa_btn.innerHTML = '-';

            let qa_input = document.createElement('input');
            qa_input.type = 'number';

            let qa_btn2 = document.createElement('button');
            qa_btn2.className = 'inc_btn';
            qa_btn2.innerHTML = '+';

            quantity_add.append(qa_btn, qa_input, qa_btn2);

            let del_button = document.createElement('div');
            del_button.className = 'del_btn';

            let del_button_b = document.createElement('button');

            let del_icon = document.createElement('i');
            del_icon.className = 'far fa-trash-alt';

            del_button_b.append(del_icon);
            del_button.append(del_button_b);

            cart_funct.append(quantity_add, del_button);
            divwcart_text.append(text_name, text_price, text_shadesno, cart_funct);

            divwcart.append(divwcart_image, divwcart_text);

            cart_items.append(divwcart);
            console.log(cart_items);
            // count++;
        }
        display();
    });
    total = total.toString();
    tot = '₹' + total;
    document.querySelector('.ptotal').innerHTML = tot;
    document.querySelector('.sum_total').innerHTML = tot;

    console.log(total);
}

let wishPop = document.getElementById('wishlistpop');
wishPop.addEventListener('click', redirect);

function redirect() {
    window.location.href = '../wishlist/wishlist.html';
}

var wish_fn = document.querySelector('.wishlist_ic');

wish_fn.addEventListener('click', wishlist);

function wishlist() {
    if (wish_fn.style.background === 'red') {
        wish_fn.style.background = 'white';
        // return;

        let prod = JSON.parse(localStorage.getItem('wishlist'));
        console.log(prod);
        prod.pop();
        localStorage.setItem('wishlist', JSON.stringify(prod));

        return;
    } else {
        wish_fn.style.background = 'red';
    }

    console.log('hi');
    let list = {};

    list.name = document.querySelector('.name').innerHTML;
    list.price = document.querySelector('.price').innerHTML;
    list.image = document.querySelector('.productimg').src;
    if (localStorage.getItem('wishlist') === null) {
        localStorage.setItem('wishlist', JSON.stringify([]));
    }

    let prod = JSON.parse(localStorage.getItem('wishlist'));
    prod.push(list);
    console.log(prod);

    localStorage.setItem('wishlist', JSON.stringify(prod));
}

// console.log(count);

let user = document.getElementById('user');
user.addEventListener('click', user_check);

function user_check() {
    window.location.href = '../lakmeuser/lakmeuser.html';
}

let checkout = document.querySelector('.checkout');
checkout.addEventListener('click', go_check);

function go_check() {
    localStorage.setItem('total_details', JSON.stringify([]));

    let pay_details = JSON.parse(localStorage.getItem('total_details'));
    pay_details.push(total);

    localStorage.setItem('total_details', JSON.stringify(pay_details));

    window.location.href = '../checkout/checkout.html';
}

var left = 1;
var right = 4;

function show() {
    for (i = left; i <= right; i++) {
        document.getElementById("c" + i).style.display = "inline-block"
    }
}

function moveLeft() {
    if (left <= 4 && right <= 8) {
        document.getElementById("c" + left).style.display = "none";
        left += 1;
        right += 1;
        for (i = left; i <= right; i++) {
            document.getElementById("c" + i).style.display = "inline-block"
        }

    } else {
        return;
    }
}

function moveRight() {
    if (left >= 1 && right >= 5) {
        document.getElementById("c" + right).style.display = "none";
        left -= 1;
        right -= 1;
        for (i = left; i <= right; i++) {
            document.getElementById("c" + i).style.display = "inline-block"
        }
    } else {
        return;
    }
}