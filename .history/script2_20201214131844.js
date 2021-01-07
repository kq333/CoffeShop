
 




const rr = localStorage.getItem("arrPrice");



console.log(rr)





 
let obj = JSON.parse(rr);


console.log(obj)

if(rr.includes("product1")){


  document.querySelector(".productPriceValue").innerHTML = obj[0].price;
  document.querySelector(".inputNumber").innerHTML = obj[0].number;


  
  const ProductClone = document.querySelector(".productClone");
  const createElement = document.createElement("li");
   
  const product1 = document.querySelector(".img1");
  const element = product1.cloneNode(true);
  const tt =   createElement.appendChild(element);
  const append = ProductClone.appendChild(tt);
  
  //ProductClone.insertBefore(createElement, ProductClone.childNodes[0] )

  


  ProductClone.insertBefore(createElement, product1 )

}

if(rr.includes("product2")){
    document.querySelector(".productPriceValue").innerHTML = obj[0].price;
    document.querySelector(".inputNumber").innerHTML = obj[0].number;
  
    const ProductClone = document.querySelector(".productClone");
    const firstLi= document.querySelector(".first");
    
  
    const createElement = document.createElement("li");
   
      const product2 = document.querySelector(".img2");
      const element = product2.cloneNode(true);
    const tt =   createElement.appendChild(element);
   const t =  ProductClone.appendChild(tt)

   ProductClone.insertBefore(createElement, product2 )

  
   
  
  
  
  }