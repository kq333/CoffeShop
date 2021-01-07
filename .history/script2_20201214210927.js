///// geting value from JSON ///

const rr = localStorage.getItem("arrPrice");
let obj = JSON.parse(rr);






/// Displaying values from Object to new page ///////




if(rr.includes("product1")){

  console.log();


  function getKey(obj,value){
    if(typeof value === "object"){
      value = JSON.stringify(value);
      return Object.keys(obj).find(key => JSON.stringify(obj[key]) === value);
    }
    else return Object.keys(obj).find(key => obj[key] === value);
   }
   
   console.log(getKey(questions,val));











  /////////////////////////////




  document.querySelector(".second1").innerHTML = obj[0].number + " szt.";
  document.querySelector(".productPriceValue1").innerHTML = obj[0].price  + " PLN" ;
  document.querySelector(".inputNumber1").innerHTML = 35.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket1");

  document.querySelector(".first1").style.display = "block";
  document.querySelector(".second1").style.display = "block";
  document.querySelector(".inputNumber1").style.display = "block";
  document.querySelector(".productPriceValue1").style.display = "block";
  document.getElementById ("deleteBasket1").style.display = "block";



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









  let questions={
    1:{
         quest: "blah blah blah",
         answers: ["1812", "1837", "1864", "1899"],
         correct: "1837"
    },
    2:{
        quest: "fasfa asf",
        answers : ["2","3","4","5"],
        correct : "3"
    }
}

let val = {
        quest: "fasfa asf",
        answers : ["2","3","4","5"],
        correct : "3"
    }
function getKey(obj,value){
 if(typeof value === "object"){
   value = JSON.stringify(value);
   return Object.keys(obj).find(key => JSON.stringify(obj[key]) === value);
 }
 else return Object.keys(obj).find(key => obj[key] === value);
}

console.log(getKey(questions,val));