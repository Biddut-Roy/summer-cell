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
    const totalPrices = document.getElementById('total-prices');
      total += parseFloat(price);
    const fixTotal = total.toFixed(2);
     totalPrices.innerText = fixTotal;
     const primaryBtn1 = document.getElementById('myButton1');
    const mainTotals = document.getElementById('total');
    mainTotals.innerText = total;
     if( total >= 200){
        primaryBtn.removeAttribute('disabled');
        primaryBtn.style.backgroundColor = 'green';
        // primaryBtn1.removeAttribute('disabled');
        // primaryBtn1.style.backgroundColor = 'green';
        
     }else{
        primaryBtn.setAttribute('disabled', true);
        // primaryBtn1.setAttribute('disabled', true);
     }
    

     purchase(primaryBtn1)
}

function couponCode(){
    const coupon = document.getElementById('coupon');
    const discount = document.getElementById('total-discount');
    const mainTotal = document.getElementById('total');
    const couponValue = coupon.value;
    if( couponValue === "SELL200"){
        const totalDiscount = (total * 20) / 100;
        discount.innerText = totalDiscount;
        mainTotal.innerText = total - totalDiscount;
    }else{
        mainTotal.innerText = total;
    }
}

function purchase(primaryBtn1){


    if( total >= 200){
        primaryBtn1.removeAttribute('disabled');
        primaryBtn1.style.backgroundColor = 'green';
        
     }else{
        primaryBtn1.setAttribute('disabled', true);
     }
}


