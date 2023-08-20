let total = 0;


function clickByCard(target){
    const productName = target.childNodes[3].childNodes[3].innerText;
    const productPrices = target.childNodes[3].childNodes[5].innerText;
    const price = productPrices.split(" ")[0];
    titleAdd(productName);
    pricesAdd(price);
}

function titleAdd(name){
    const productNameAdd = document.getElementById('product-name');
    const productNameCreate = document.createElement('p');
    const count = productNameAdd.childElementCount;
    productNameCreate.innerHTML =`${count + 1}.  ${name} `;
    productNameAdd.appendChild(productNameCreate);

}

function pricesAdd(price){
    const primaryBtn = document.getElementById('myButton');
    const primaryBtn1 = document.getElementById('myButton1');
    const totalPrices = document.getElementById('total-prices');
      total += parseFloat(price);
    const fixTotal = total.toFixed(2);
     totalPrices.innerText = fixTotal;
    const mainTotals = document.getElementById('total');
    mainTotals.innerText = total;
     if( total >= 200){
        primaryBtn.removeAttribute('disabled');
        primaryBtn.style.backgroundColor = 'green';
        
     }else{
        primaryBtn.setAttribute('disabled', true);
     }
    

     purchase(primaryBtn1);
}

function couponCode(){
    const coupon = document.getElementById('coupon');
    const discount = document.getElementById('total-discount');
    const mainTotal = document.getElementById('total');
    const couponValue = coupon.value;
    coupon.value = ' ';
    if( couponValue === "SELL200"){
        const totalDiscount = (total * 20) / 100;
        discount.innerText = totalDiscount;
        mainTotal.innerText = total - totalDiscount;
    }else{
        mainTotal.innerText = total;
    }
}

function purchase(primaryBtn1){
    if( total >= 0){
        primaryBtn1.removeAttribute('disabled');
        primaryBtn1.style.backgroundColor = 'green';
        
     }else{
        primaryBtn1.setAttribute('disabled', true);
     }
}


function purchasePop(){
    const hiddenPopup = document.getElementById('hiddenPopup');
    hiddenPopup.removeAttribute('hidden');
}
function home(){
    // location.href = "index.html";       
    const hiddenPopups = document.getElementById('hiddenPopup');
    const mainTotalReset = document.getElementById('total');
    const totalPricesReset = document.getElementById('total-prices');
    const discountReset = document.getElementById('total-discount');
    const productNameAddReset = document.getElementById('product-name');
    hiddenPopups.setAttribute("hidden", true);
    totalPricesReset.innerText = "00.00";
    mainTotalReset.innerText = "00.00";
    discountReset.innerText = "00.00";
    productNameAddReset.innerHTML =' ';
}


