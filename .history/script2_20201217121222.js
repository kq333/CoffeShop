///// getting value from JSON ///

const rr = localStorage.getItem("arrPrice");
let obj = JSON.parse(rr);


//////////////////////////////////




let index = obj.findIndex(function(obj) {      
            return obj.id == "product1";
           
});

let index2 = obj.findIndex(function ( obj ) {      
            return obj.id == "product2";
           
});



let index3 = obj.findIndex(function ( obj ) {      
            return obj.id == "product3";
           
});



























///////////////////////////////////




if(rr.includes("product1")){
 
  


  document.querySelector(".second1").innerHTML = obj[index].number + " szt.";
  document.querySelector(".productPriceValue1").innerHTML = obj[index].price  + " PLN" ;
  document.querySelector(".inputNumber1").innerHTML = 35.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket1");
  document.querySelector(".first1").style.display = "block";
  document.querySelector(".second1").style.display = "block";
  document.querySelector(".inputNumber1").style.display = "block";
  document.querySelector(".productPriceValue1").style.display = "block";
  document.getElementById ("deleteBasket1").style.display = "block";


}


if(rr.includes("product2")){

  document.querySelector(".second2").innerHTML = obj[index2].number + " szt.";
  document.querySelector(".productPriceValue2").innerHTML = obj[index2].price  + " PLN" ;
  document.querySelector(".inputNumber2").innerHTML = 45.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket2");
  document.querySelector(".first2").style.display = "block";
  document.querySelector(".second2").style.display = "block";
  document.querySelector(".inputNumber2").style.display = "block";
  document.querySelector(".productPriceValue2").style.display = "block";
  document.getElementById ("deleteBasket2").style.display = "block";




 
  
  };



  if(rr.includes("product3")){

    document.querySelector(".second3").innerHTML = obj[index3].number + " szt.";
  document.querySelector(".productPriceValue3").innerHTML = obj[index3].price  + " PLN" ;
  document.querySelector(".inputNumber3").innerHTML = 32.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket3");
  document.querySelector(".first3").style.display = "block";
  document.querySelector(".second3").style.display = "block";
  document.querySelector(".inputNumber3").style.display = "block";
  document.querySelector(".productPriceValue3").style.display = "block";
  document.getElementById ("deleteBasket3").style.display = "block";


  
  };





///////////// input type="radio" value ////////////////




const gls1 = document.querySelector(".gls1_1");
 
 function clik(){
 if(gls1.checked==true){
console.log(gls1.value)


 }
 };

 

 


  





  