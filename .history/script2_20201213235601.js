
 




const rr = localStorage.getItem("arrPrice");



console.log(rr)





 
let obj = JSON.parse(rr);


console.log(obj)

if(rr.includes("product1")){
  document.querySelector(".productPriceValue").innerHTML = obj[0].price;
  document.querySelector(".inputNumber").innerHTML = obj[0].number;

  const ProductClone = document.querySelector(".productClone");
  


 const createLi = document.querySelector(".li");
    const product15 = document.querySelector(".img");
    const element = product15.cloneNode(true);
    ProductClone.appendChild(element);

 



}

