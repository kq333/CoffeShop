
 




const rr = localStorage.getItem("arrPrice");



console.log(rr)





 
let obj = JSON.parse(rr);


console.log(obj)

if(rr.includes("product1")){
  document.querySelector(".productPriceValue").innerHTML = obj[0].price;
  document.querySelector(".inputNumber").innerHTML = obj[0].number;

  const ProductClone = document.querySelector(".productClone");
  const li =  document.createElement("li");
  const L1 = document.querySelector(".l1");

  const element = l1.cloneNode(true);
  const append = li.appendChild(element);
  ProductClone.append;


 



}

