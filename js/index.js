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
    const primaryBtn = document.getElementById('pry-BTN');
    const totalPrices = document.getElementById('total-prices');
      total += parseFloat(price);
    const fixTotal = total.toFixed(2);
     totalPrices.innerText = fixTotal;
     if(parseFloat(fixTotal) >= 200){
        primaryBtn.removeAttribute('disabled');
     }else{
        primaryBtn.setAttributeAttribute('disabled', true);
     }

}