///// geting value from JSON ///

const rr = localStorage.getItem("arrPrice");
let obj = JSON.parse(rr);






/// Displaying values from Object to new page ///////




if(rr.includes("product1")){

  console.log();




  document.querySelector(".second1").innerHTML = obj[0].number + " szt.";
  document.querySelector(".productPriceValue1").innerHTML = obj[0].price  + " PLN" ;
  document.querySelector(".inputNumber1").innerHTML = 35.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket1");

  document.querySelector(".first1").display.style = "block";


};

if(rr.includes("product2")){
  document.querySelector(".second2").innerHTML = obj[0].number + " szt.";
  document.querySelector(".productPriceValue2").innerHTML = obj[0].price  + " PLN" ;
  document.querySelector(".inputNumber2").innerHTML = 45.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket2");







 
  
  };



  if(rr.includes("product3")){

    document.querySelector(".second3").innerHTML = obj[0].number + " szt.";
  document.querySelector(".productPriceValue3").innerHTML = obj[0].price  + " PLN" ;
  document.querySelector(".inputNumber3").innerHTML = 32.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket3");


  
  };