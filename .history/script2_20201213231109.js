
 




const rr = localStorage.getItem("arrPrice");



console.log(rr)





 
let obj = JSON.parse(rr);


console.log(obj)

if(rr.includes("product1")){
  document.querySelector(".productPriceValue").innerHTML = obj[0].price;
  document.querySelector(".inputNumber").innerHTML = obj[0].number;

}

