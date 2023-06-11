// data fetching through the fake store api
function prodectdata() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem("Api Response", JSON.stringify(res));
      // data(res);
    });
}

prodectdata();
var apiData = JSON.parse(localStorage.getItem("Api Response")) || [];
data(apiData);

// appending the data
function data(apiData) {
  let prodect = document.getElementById("container");
  apiData.forEach((prodects) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = prodects.image;
    let price = document.createElement("p");
    price.innerHTML = prodects.price;
    let title = document.createElement("h4");
    title.innerText = prodects.title;
    let category = document.createElement("p");
    category.innerText = prodects.category;
    // let id = document.createElement("h5");
    // id.innerText = prodect.id;
    let newdiv = document.createElement("div");
    newdiv.setAttribute("class", "buttonsforbuy");
    let btn = document.createElement("button");
    btn.innerText = "Buy";
    let cart = document.createElement("button");
    cart.innerText = "Add Cart";
    div.append(image, price, title, category);
    div.appendChild(newdiv);
    newdiv.append(btn, cart);
    prodect.append(div);
    cart.addEventListener("click", function () {
      // console.log(image,price,title);
      let userdata = JSON.parse(localStorage.getItem("addcart")) || [];
      let Object = {
        imagedata: image.src,
        pricedata: price.innerHTML,
        titlename: title.innerText,
      };
      userdata.push(Object);
      localStorage.setItem("addcart", JSON.stringify(userdata));
    });
  });
}

// getting the selet element with the id and adding change event listner
let filterOptions = document.getElementById("filter");
filterOptions.addEventListener("change", function () {
  filtaring(apiData, filterOptions.value);
});
// this function filters the data which is coming from the api
function filtaring(apiData, option) {
  if (option) {
    let filterdData = apiData.filter((ele) => ele.category === option);
    document.getElementById("container").innerHTML = "";
    data(filterdData);
  } else {
    document.getElementById("container").innerHTML = "";
    data(apiData);
  }
}

// navigate to the cart page
function navigate() {
  window.location.href = "./cart/cart.html";
}
function login(){
  window.location.href = "./login/login.html"
}
// getting the select element with the id and adding change event listner
let sortOption = document.getElementById("sort");
sortOption.addEventListener("change", function () {
  sorting(apiData, sortOption.value);
});

// this function sort the data which is coming from the api
function sorting(apiData, option) {
  if (option === "low-to-high") {
    document.getElementById("container").innerHTML = "";
    let sortData = [...apiData];
    sortData.sort((a, b) => a.price - b.price);
    data(sortData);
  } else if (option === "high-to-low") {
    document.getElementById("container").innerHTML = "";
    let sortData = [...apiData];
    sortData.sort((a, b) => b.price - a.price);
    data(sortData);
  } else if (option === "") {
    document.getElementById("container").innerHTML = "";
    let sortData = apiData;
    data(sortData);
  }
}
