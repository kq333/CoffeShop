///// geting value from JSON ///

const rr = localStorage.getItem("arrPrice");
let obj = JSON.parse(rr);



//////////////////////









/// Displaying values from Object to new page ///////




if(rr.includes("product1")){


  document.querySelector(".productPriceValue").innerHTML = obj[0].price;
  document.querySelector(".inputNumber").innerHTML = obj[0].number;


  
  const ProductClone = document.querySelector(".productClone");
  const createElement = document.createElement("li");
   
  const product1 = document.querySelector(".img1");
  const element = product1.cloneNode(true);
  const tt =   createElement.appendChild(element);
  const append = ProductClone.append(tt);
  


  const firstLi= document.querySelector(".first");


  

};

if(rr.includes("product2")){

    document.querySelector(".productPriceValue").innerHTML = obj[0].price;
    document.querySelector(".inputNumber").innerHTML = obj[0].number;
  
    const ProductClone = document.querySelector(".productClone");
    const firstLi= document.querySelector(".first");
    
  
    const createElement = document.createElement("li");
   
      const product2 = document.querySelector(".img2");
      const element = product2.cloneNode(true);
    const tt =   createElement.appendChild(element);
   const t =  ProductClone.append(tt)

  // ProductClone.insertBefore(createElement, product2 )

  
   
  
  
  
  };