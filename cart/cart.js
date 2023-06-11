  var newdata = JSON.parse(localStorage.getItem("addcart"));

  let div = document.getElementById("container");

  function appendData(data) {
    data.map((ele, ind) => {
      let imagediv = document.createElement("div");
      imagediv.setAttribute("class", "box");

      let imageelmant = document.createElement("img");
      imageelmant.src = ele.imagedata;

      let priceelmant = document.createElement("p");
      priceelmant.innerText = ele.pricedata;

      let titleelmant = document.createElement("h4");
      titleelmant.innerText = ele.titlename;

      let bundiv = document.createElement("div");
      bundiv.setAttribute("class", "buybtn");

      let butn = document.createElement("button");
      butn.innerText = "Remove";

      butn.addEventListener("click", function () {
        deleteItem(ele.titlename, ind);
      });
      bundiv.append(butn);
      imagediv.append(imageelmant, priceelmant, titleelmant, bundiv);
      div.append(imagediv);
    });
  }

  appendData(newdata);

  // this function use to promo code for discount
  function promoCode(){
    let discount = "Nani100";
    let promo = document.querySelector("input").value
    if(promo === discount){

    }
  }

  // this function add the price of pradocts
  function pricecount(newdata) {
    let sum = 0;
    newdata.forEach((ele) => {
      let amount = ele.pricedata;
      amount = Number(amount);
      sum = sum + amount;
    });
    let pricediv = document.querySelector("#price h4");
    pricediv.innerHTML = "Total Price: " + Math.floor(sum);
    let discount = "Nani100";
    let promo = document.querySelector("input").value
    if(promo === discount){
      let discountPrice = 20 / 100;
      let discountAmount = sum * discountPrice;
      let discountTotal = sum - discountAmount
      console.log(discountTotal)
    }
  }
  pricecount(newdata);

  // this function was doing the delete in cart pradocts
  function deleteItem(itemName, ind) {
    newdata.splice(ind, 1);
    localStorage.setItem("addcart", JSON.stringify(newdata));
    document.getElementById("container").innerHTML = "";
    appendData(newdata);
  }