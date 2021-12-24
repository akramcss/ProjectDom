
let ProductunitPrice1=document.getElementById('unit-price1')
let quantity1=document.getElementById('price-count1')
let ProductPrice1=document.getElementById('ProductPrice1')

let ProductunitPrice2=document.getElementById('unit-price2')
let quantity2=document.getElementById('price-count2')
let ProductPrice2=document.getElementById('ProductPrice2')

let ProductunitPrice3=document.getElementById('unit-price3')
let quantity3=document.getElementById("price-count3")
let ProductPrice3=document.getElementById('ProductPrice3')


let totalWithoutTax=document.getElementById('totalWithoutTax')
let total=document.getElementById('total')


let cartInfo1 =document.getElementById("cart-info1");
let cartInfo2 =document.getElementById("cart-info2");
let cartInfo3 =document.getElementById("cart-info3");

document.querySelector('#price-count1').addEventListener('input',incPrduct1);
document.querySelector('#price-count2').addEventListener('input',incPrduct2);
document.querySelector('#price-count3').addEventListener('input',incPrduct3);

document.querySelector('#removeel1').addEventListener('click',RemovePrduct1);
document.querySelector('#removeel2').addEventListener('click',RemovePrduct2);
document.querySelector('#removeel3').addEventListener('click',RemovePrduct3);


function incPrduct1(){
    
    ProductPrice1.textContent = parseInt(ProductunitPrice1.textContent) * quantity1.value;
    totalWithoutTax.textContent =  parseInt(ProductPrice1.textContent) + parseInt(ProductPrice2.textContent) + parseInt(ProductPrice3.textContent);
    
    if (parseInt(ProductPrice1.textContent) == 0 && parseInt(ProductPrice2.textContent) == 0 && parseInt(ProductPrice3.textContent) == 0 ) {
      total.textContent = 0
    } else {
      total.textContent = parseInt(totalWithoutTax.textContent) + 35;
    }
    
  
}

function incPrduct2(){
    
  ProductPrice2.textContent = parseInt(ProductunitPrice2.textContent) * quantity2.value;
  totalWithoutTax.textContent =  parseInt(ProductPrice1.textContent) + parseInt(ProductPrice2.textContent) + parseInt(ProductPrice3.textContent);
  if (parseInt(ProductPrice1.textContent) == 0 && parseInt(ProductPrice2.textContent) == 0 && parseInt(ProductPrice3.textContent) == 0 ) {
    total.textContent = 0
  } else {
    total.textContent = parseInt(totalWithoutTax.textContent) + 35;
  }

}

function incPrduct3(){
    
  ProductPrice3.textContent = parseInt(ProductunitPrice3.textContent) * quantity3.value;
  totalWithoutTax.textContent =  parseInt(ProductPrice1.textContent) + parseInt(ProductPrice2.textContent) + parseInt(ProductPrice3.textContent);
  if (parseInt(ProductPrice1.textContent) == 0 && parseInt(ProductPrice2.textContent) == 0 && parseInt(ProductPrice3.textContent) == 0 ) {
    total.textContent = 0
  } else {
    total.textContent = parseInt(totalWithoutTax.textContent) + 35;
  }

}

function RemovePrduct1(){
  cartInfo1.remove()
  
}

function RemovePrduct2(){
  cartInfo2.remove()
}

function RemovePrduct3(){
  cartInfo3.remove()
}