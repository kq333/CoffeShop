///// geting value from JSON ///

const rr = localStorage.getItem("arrPrice");
let obj = JSON.parse(rr);






/// Displaying values from Object to new page ///////




if(rr.includes("product1")){
  document.querySelector(".second1").innerHTML = obj[0].number + " szt.";
  document.querySelector(".productPriceValue1").innerHTML = obj[0].price  + " PLN" ;
  document.querySelector(".inputNumber1").innerHTML = 35.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket1");
  


//const price = document.querySelector(".productPriceValue").innerHTML = obj[0].price;
 // const number = document.querySelector(".inputNumber").innerHTML = obj[0].number;


  
 // const ProductClone = document.querySelector(".first1");
 // const createElement = document.createElement("li");
 // const product1 = document.querySelector(".img1");
 // const element = product1.cloneNode(true);
 // ProductClone.appendChild(product1);


 //  document.querySelector(".second1").innerHTML = "sdssd"; 
 




};

if(rr.includes("product2")){
  document.querySelector(".second2").innerHTML = obj[0].number + " szt.";
  document.querySelector(".productPriceValue2").innerHTML = obj[0].price  + " PLN" ;
  document.querySelector(".inputNumber2").innerHTML = 45.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket2");










 // const price = document.querySelector(".productPriceValue").innerHTML = obj[0].price;

 // const number =  document.querySelector(".inputNumber").innerHTML = obj[0].number;

 // const ProductClone = document.querySelector(".first2");
 // const createElement = document.createElement("li"); 
 // const product2 = document.querySelector(".img2");
 // const element = product2.cloneNode(true);
//  ProductClone.appendChild(product2);

 // document.querySelector(".second2").innerHTML = obj[0].number;  
 


 
  
  };




  if(rr.includes("product5")){

 // const price = document.querySelector(".productPriceValue").innerHTML = obj[0].price;

 // const number =  document.querySelector(".inputNumber").innerHTML = obj[0].number;
  
 // const ProductClone = document.querySelector(".first5");
    
//  const createElement = document.createElement("li");
   
//  const product5 = document.querySelector(".img5");
//  const element = product5.cloneNode(true);
//  ProductClone.appendChild(product5)


  
  };