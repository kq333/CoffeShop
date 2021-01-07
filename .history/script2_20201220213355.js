///// getting value from JSON ///

const rr = localStorage.getItem("arrPrice");
let obj = JSON.parse(rr);


////////////////////////////////// index of Objects in Array

let index1 = obj.findIndex(function(obj){      
            return obj.id == "product1";
           
});

let index2 = obj.findIndex(function(obj){      
            return obj.id == "product2";
           
});


let index3 = obj.findIndex(function(obj){      
            return obj.id == "product3";
           
});


let index4 = obj.findIndex(function(obj){      
            return obj.id == "product4";
           
});

let index5 = obj.findIndex(function(obj){      
            return obj.id == "product5";
           
});

let index6 = obj.findIndex(function(obj){      
            return obj.id == "product6";
           
});

let index7 = obj.findIndex(function(obj){      
            return obj.id == "product7";
           
});

let index8 = obj.findIndex(function(obj){      
            return obj.id == "product8";
           
});

let index9 = obj.findIndex(function(obj){      
            return obj.id == "product9";
           
});

let index10 = obj.findIndex(function(obj){      
            return obj.id == "product10";
           
});

let index11 = obj.findIndex(function(obj){      
            return obj.id == "product11";
           
});

let index12 = obj.findIndex(function(obj){      
            return obj.id == "product12";
           
});

let index13 = obj.findIndex(function(obj){      
            return obj.id == "product13";
           
});

let index14 = obj.findIndex(function(obj){      
            return obj.id == "product14";
           
});

let index15 = obj.findIndex(function(obj){      
            return obj.id == "product15";
           
});


/////////////////////////////////// Display products in basket



let arrySumUp = [];

let objProd1 = obj.find(o => o.id === 'product1');
 

if(objProd1){
 
  document.querySelector(".second1").innerHTML = obj[index1].number + " szt.";
  document.querySelector(".productPriceValue1").innerHTML = obj[index1].price  + " PLN" ;
  document.querySelector(".inputNumber1").innerHTML = 35.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket1");
  document.querySelector(".first1").style.display = "block";
  document.querySelector(".second1").style.display = "block";
  document.querySelector(".inputNumber1").style.display = "block";
  document.querySelector(".productPriceValue1").style.display = "block";
  document.getElementById ("deleteBasket1").style.display = "block";
  arrySumUp.push(obj[index1].price)


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
  arrySumUp.push(obj[index2].price)
  
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
  arrySumUp.push(obj[index3].price)

  };

  if(rr.includes("product4")){

  document.querySelector(".second4").innerHTML = obj[index4].number + " szt.";
  document.querySelector(".productPriceValue4").innerHTML = obj[index4].price  + " PLN" ;
  document.querySelector(".inputNumber4").innerHTML = 55.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket4");
  document.querySelector(".first4").style.display = "block";
  document.querySelector(".second4").style.display = "block";
  document.querySelector(".inputNumber4").style.display = "block";
  document.querySelector(".productPriceValue4").style.display = "block";
  document.getElementById ("deleteBasket4").style.display = "block";
    arrySumUp.push(obj[index4].price)

  };

  if(rr.includes("product5")){

  document.querySelector(".second5").innerHTML = obj[index5].number + " szt.";
  document.querySelector(".productPriceValue5").innerHTML = obj[index5].price  + " PLN" ;
  document.querySelector(".inputNumber5").innerHTML = 55.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket5");
  document.querySelector(".first5").style.display = "block";
  document.querySelector(".second5").style.display = "block";
  document.querySelector(".inputNumber5").style.display = "block";
  document.querySelector(".productPriceValue5").style.display = "block";
  document.getElementById ("deleteBasket5").style.display = "block";
  arrySumUp.push(obj[index5].price)

  };

   if(rr.includes("product6")){

  document.querySelector(".second6").innerHTML = obj[index6].number + " szt.";
  document.querySelector(".productPriceValue6").innerHTML = obj[index6].price  + " PLN" ;
  document.querySelector(".inputNumber6").innerHTML = 51.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket6");
  document.querySelector(".first6").style.display = "block";
  document.querySelector(".second6").style.display = "block";
  document.querySelector(".inputNumber6").style.display = "block";
  document.querySelector(".productPriceValue6").style.display = "block";
  document.getElementById ("deleteBasket6").style.display = "block";
  arrySumUp.push(obj[index6].price)


  };

   if(rr.includes("product7")){

  document.querySelector(".second7").innerHTML = obj[index7].number + " szt.";
  document.querySelector(".productPriceValue7").innerHTML = obj[index7].price  + " PLN" ;
  document.querySelector(".inputNumber7").innerHTML = 49.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket7");
  document.querySelector(".first7").style.display = "block";
  document.querySelector(".second7").style.display = "block";
  document.querySelector(".inputNumber7").style.display = "block";
  document.querySelector(".productPriceValue7").style.display = "block";
  document.getElementById ("deleteBasket7").style.display = "block";
  arrySumUp.push(obj[index7].price)


  };

    if(rr.includes("product8")){

  document.querySelector(".second8").innerHTML = obj[index8].number + " szt.";
  document.querySelector(".productPriceValue8").innerHTML = obj[index8].price  + " PLN" ;
  document.querySelector(".inputNumber8").innerHTML = 53.50 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket8");
  document.querySelector(".first8").style.display = "block";
  document.querySelector(".second8").style.display = "block";
  document.querySelector(".inputNumber8").style.display = "block";
  document.querySelector(".productPriceValue8").style.display = "block";
  document.getElementById ("deleteBasket8").style.display = "block";
  arrySumUp.push(obj[index8].price)

  };

    if(rr.includes("product9")){

  document.querySelector(".second9").innerHTML = obj[index9].number + " szt.";
  document.querySelector(".productPriceValue9").innerHTML = obj[index9].price  + " PLN" ;
  document.querySelector(".inputNumber9").innerHTML = 47.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket9");
  document.querySelector(".first9").style.display = "block";
  document.querySelector(".second9").style.display = "block";
  document.querySelector(".inputNumber9").style.display = "block";
  document.querySelector(".productPriceValue9").style.display = "block";
  document.getElementById ("deleteBasket9").style.display = "block";
  arrySumUp.push(obj[index9].price)


  };

    if(rr.includes("product10")){

  document.querySelector(".second10").innerHTML = obj[index10].number + " szt.";
  document.querySelector(".productPriceValue10").innerHTML = obj[index10].price  + " PLN" ;
  document.querySelector(".inputNumber10").innerHTML = 43.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket10");
  document.querySelector(".first10").style.display = "block";
  document.querySelector(".second10").style.display = "block";
  document.querySelector(".inputNumber10").style.display = "block";
  document.querySelector(".productPriceValue10").style.display = "block";
  document.getElementById ("deleteBasket10").style.display = "block";
  arrySumUp.push(obj[index10].price)


  };


   if(rr.includes("product11")){

  document.querySelector(".second11").innerHTML = obj[index11].number + " szt.";
  document.querySelector(".productPriceValue11").innerHTML = obj[index11].price  + " PLN" ;
  document.querySelector(".inputNumber11").innerHTML = 35.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket11");
  document.querySelector(".first11").style.display = "block";
  document.querySelector(".second11").style.display = "block";
  document.querySelector(".inputNumber11").style.display = "block";
  document.querySelector(".productPriceValue11").style.display = "block";
  document.getElementById ("deleteBasket11").style.display = "block";
  arrySumUp.push(obj[index11].price)

  };

 if(rr.includes("product12")){

  document.querySelector(".second12").innerHTML = obj[index12].number + " szt.";
  document.querySelector(".productPriceValue12").innerHTML = obj[index12].price  + " PLN" ;
  document.querySelector(".inputNumber12").innerHTML = 46.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket12");
  document.querySelector(".first12").style.display = "block";
  document.querySelector(".second12").style.display = "block";
  document.querySelector(".inputNumber12").style.display = "block";
  document.querySelector(".productPriceValue12").style.display = "block";
  document.getElementById ("deleteBasket12").style.display = "block";
  arrySumUp.push(obj[index12].price)

  };

   if(rr.includes("product13")){

  document.querySelector(".second13").innerHTML = obj[index13].number + " szt.";
  document.querySelector(".productPriceValue13").innerHTML = obj[index13].price  + " PLN" ;
  document.querySelector(".inputNumber13").innerHTML = 49.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket13");
  document.querySelector(".first13").style.display = "block";
  document.querySelector(".second13").style.display = "block";
  document.querySelector(".inputNumber13").style.display = "block";
  document.querySelector(".productPriceValue13").style.display = "block";
  document.getElementById ("deleteBasket13").style.display = "block";
  arrySumUp.push(obj[index13].price)


  };


 if(rr.includes("product14")){

  document.querySelector(".second14").innerHTML = obj[index14].number + " szt.";
  document.querySelector(".productPriceValue14").innerHTML = obj[index14].price  + " PLN" ;
  document.querySelector(".inputNumber14").innerHTML = 32.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket14");
  document.querySelector(".first14").style.display = "block";
  document.querySelector(".second14").style.display = "block";
  document.querySelector(".inputNumber14").style.display = "block";
  document.querySelector(".productPriceValue14").style.display = "block";
  document.getElementById ("deleteBasket14").style.display = "block";
  arrySumUp.push(obj[index14].price)

  };

   if(rr.includes("product15")){

  document.querySelector(".second15").innerHTML = obj[index15].number + " szt.";
  document.querySelector(".productPriceValue15").innerHTML = obj[index15].price  + " PLN" ;
  document.querySelector(".inputNumber15").innerHTML = 52.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket15");
  document.querySelector(".first15").style.display = "block";
  document.querySelector(".second15").style.display = "block";
  document.querySelector(".inputNumber15").style.display = "block";
  document.querySelector(".productPriceValue15").style.display = "block";
  document.getElementById ("deleteBasket15").style.display = "block";
  arrySumUp.push(obj[index15].price);

  };



   calculator = (a,b) =>{
    return a+b;
  };


let totalValue = document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator) + " PLN";



///////////// input type="radio" value ////////////////


let gls1 = document.querySelector(".gls1_1");
let gls2 = document.querySelector(".gls1_2");
let gls3 = document.querySelector(".gls1_3");
let gls4 = document.querySelector(".gls1_4"); 

 
  clik = () =>{

 if(gls1.checked==true){

let glsValue1 = gls1.value;

const a = document.querySelector(".valueShipmentValue").innerHTML =  glsValue1 + " PLN";
document.querySelector(".totalAllSpan").innerHTML =  (arrySumUp.reduce(calculator) + 11.90 ) + " PLN";

 }; 
 
 if(gls2.checked==true){

  let glsValue2 = gls2.value;
  document.querySelector(".valueShipmentValue").innerHTML =  glsValue2 + " PLN";
  document.querySelector(".totalAllSpan").innerHTML =  (arrySumUp.reduce(calculator) + 13.90) + " PLN";
  
  
 };

 if(gls3.checked==true){
  
  let glsValue3 = gls3.value;
  document.querySelector(".valueShipmentValue").innerHTML =  glsValue3 + " PLN";
  document.querySelector(".totalAllSpan").innerHTML =  (arrySumUp.reduce(calculator)  + 11.90) + " PLN";

};

if(gls4.checked==true){

  let glsValue4 = gls4.value;
  document.querySelector(".valueShipmentValue").innerHTML =  glsValue4 + " PLN";
  document.querySelector(".totalAllSpan").innerHTML =  (arrySumUp.reduce(calculator) + 9.90) + " PLN";
}
 };


 unCheck = () =>{
  gls1.checked=false;
  gls2.checked=false;
  gls3.checked=false;
  gls4.checked=false;

  document.querySelector(".valueShipmentValue").innerHTML = 0;

  alert("Po usunięciu produktu z koszyka, proszę zaznaczyć koszty dostawy.");

 }


///////////////////////////////Delete from basket ////


const delateBasket1 = document.getElementById("deleteBasket1");
const delateBasket2 = document.getElementById("deleteBasket2");
const delateBasket3 = document.getElementById("deleteBasket3");
const delateBasket4 = document.getElementById("deleteBasket4");
const delateBasket5 = document.getElementById("deleteBasket5");
const delateBasket6 = document.getElementById("deleteBasket6");
const delateBasket7 = document.getElementById("deleteBasket7");
const delateBasket8 = document.getElementById("deleteBasket8");
const delateBasket9 = document.getElementById("deleteBasket9");
const delateBasket10 = document.getElementById("deleteBasket10");
const delateBasket11 = document.getElementById("deleteBasket11");
const delateBasket12 = document.getElementById("deleteBasket12");
const delateBasket13 = document.getElementById("deleteBasket13");
const delateBasket14 = document.getElementById("deleteBasket14");
const delateBasket15 = document.getElementById("deleteBasket15");



EmptyArray = () =>{

if(arrySumUp && arrySumUp.length==0){
    
  document.querySelector(".totalValue").innerHTML = 0;
  document.querySelector(".totalAllSpan").innerHTML = 0;

}};



  delateBasket1.addEventListener(`click`, function(){

  document.querySelector(".first1").style.display = "none";
  document.querySelector(".second1").style.display = " none";
  document.querySelector(".inputNumber1").style.display = "none ";
  document.querySelector(".productPriceValue1").style.display = "none ";
  document.getElementById ("deleteBasket1").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj1 = obj[index1].price; 
  const index = arrySumUp.indexOf(obj1);

if (index > -1) {
  arrySumUp.splice(index, 1)
};

EmptyArray();
unCheck();

 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator) + " PLN";
 document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator) + " PLN";

});


  delateBasket2.addEventListener(`click`, function(){

      document.querySelector(".first2").style.display = "none";
      document.querySelector(".second2").style.display = " none";
      document.querySelector(".inputNumber2").style.display = "none ";
      document.querySelector(".productPriceValue2").style.display = "none ";
      document.getElementById ("deleteBasket2").style.display = "none ";
      localStorage.removeItem("arrPrice");
      let obj2 = obj[index2].price;
      const index = arrySumUp.indexOf(obj2);

      if (index > -1) {
        arrySumUp.splice(index, 1)
      };

      EmptyArray();
      unCheck();
  
    document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
    document.querySelector(".totalAllSpan").innerHTML =  arrySumUp.reduce(calculator) + " PLN";

});

delateBasket3.addEventListener(`click`, function(){

  document.querySelector(".first3").style.display = "none";
  document.querySelector(".second3").style.display = " none";
  document.querySelector(".inputNumber3").style.display = "none ";
  document.querySelector(".productPriceValue3").style.display = "none ";
  document.getElementById ("deleteBasket3").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj3 = obj[index3].price;
  const index = arrySumUp.indexOf(obj3);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  }

  EmptyArray();
  unCheck();

 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator) + " PLN";
});

delateBasket4.addEventListener(`click`, function(){

  document.querySelector(".first4").style.display = "none";
  document.querySelector(".second4").style.display = " none";
  document.querySelector(".inputNumber4").style.display = "none ";
  document.querySelector(".productPriceValue4").style.display = "none ";
  document.getElementById ("deleteBasket4").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj4 = obj[index4].price;
  const index = arrySumUp.indexOf(obj4);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  }

  EmptyArray();
  unCheck();

 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator) + " PLN";

});

delateBasket5.addEventListener(`click`, function(){

  document.querySelector(".first5").style.display = "none";
  document.querySelector(".second5").style.display = " none";
  document.querySelector(".inputNumber5").style.display = "none ";
  document.querySelector(".productPriceValue5").style.display = "none ";
  document.getElementById ("deleteBasket5").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj5 = obj[index5].price;
  const index = arrySumUp.indexOf(obj5);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  }

  EmptyArray();
  unCheck();

 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator) + " PLN";

});

delateBasket6.addEventListener(`click`, function(){

  document.querySelector(".first6").style.display = "none";
  document.querySelector(".second6").style.display = " none";
  document.querySelector(".inputNumber6").style.display = "none ";
  document.querySelector(".productPriceValue6").style.display = "none ";
  document.getElementById ("deleteBasket6").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj6 = obj[index6].price;
  const index = arrySumUp.indexOf(obj6);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  };

  EmptyArray();
  unCheck();

 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);

});

delateBasket7.addEventListener(`click`, function(){

  document.querySelector(".first7").style.display = "none";
  document.querySelector(".second7").style.display = " none";
  document.querySelector(".inputNumber7").style.display = "none ";
  document.querySelector(".productPriceValue7").style.display = "none ";
  document.getElementById ("deleteBasket7").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj7 = obj[index7].price;
  const index = arrySumUp.indexOf(obj7);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  }

  EmptyArray();
  unCheck();

  document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
  document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);

});


delateBasket8.addEventListener(`click`, function(){

  document.querySelector(".first8").style.display = "none";
  document.querySelector(".second8").style.display = " none";
  document.querySelector(".inputNumber8").style.display = "none ";
  document.querySelector(".productPriceValue8").style.display = "none ";
  document.getElementById ("deleteBasket8").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj8 = obj[index8].price;
  const index = arrySumUp.indexOf(obj8);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  };

  EmptyArray();
  unCheck();


 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);

});


delateBasket9.addEventListener(`click`, function(){

  document.querySelector(".first9").style.display = "none";
  document.querySelector(".second9").style.display = " none";
  document.querySelector(".inputNumber9").style.display = "none ";
  document.querySelector(".productPriceValue9").style.display = "none ";
  document.getElementById ("deleteBasket9").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj9 = obj[index9].price;
  const index = arrySumUp.indexOf(obj9);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  };

  EmptyArray();
  unCheck();

  document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
  document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);

});


delateBasket10.addEventListener(`click`, function(){

  document.querySelector(".first10").style.display = "none";
  document.querySelector(".second10").style.display = " none";
  document.querySelector(".inputNumber10").style.display = "none ";
  document.querySelector(".productPriceValue10").style.display = "none ";
  document.getElementById ("deleteBasket10").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj10 = obj[index10].price;
  const index = arrySumUp.indexOf(obj10);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  };

  EmptyArray();
  unCheck();

 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);

});

delateBasket11.addEventListener(`click`, function(){

  document.querySelector(".first11").style.display = "none";
  document.querySelector(".second11").style.display = " none";
  document.querySelector(".inputNumber11").style.display = "none ";
  document.querySelector(".productPriceValue11").style.display = "none ";
  document.getElementById ("deleteBasket11").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj11 = obj[index11].price;
  const index = arrySumUp.indexOf(obj11);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  };

  EmptyArray();
  unCheck();

 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);

});

delateBasket12.addEventListener(`click`, function(){

  document.querySelector(".first12").style.display = "none";
  document.querySelector(".second12").style.display = " none";
  document.querySelector(".inputNumber12").style.display = "none ";
  document.querySelector(".productPriceValue12").style.display = "none ";
  document.getElementById ("deleteBasket12").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj12 = obj[index12].price;
  const index = arrySumUp.indexOf(obj12);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  };

  EmptyArray();
  unCheck();

 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);

});


delateBasket13.addEventListener(`click`, function(){

  document.querySelector(".first13").style.display = "none";
  document.querySelector(".second13").style.display = " none";
  document.querySelector(".inputNumber13").style.display = "none ";
  document.querySelector(".productPriceValue13").style.display = "none ";
  document.getElementById ("deleteBasket13").style.display = "none ";
  localStorage.removeItem("arrPrice");

  let obj13 = obj[index13].price;

  const index = arrySumUp.indexOf(obj13);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  };

  EmptyArray();
  unCheck();


 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";

document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);

});

delateBasket14.addEventListener(`click`, function(){

  document.querySelector(".first14").style.display = "none";
  document.querySelector(".second14").style.display = " none";
  document.querySelector(".inputNumber14").style.display = "none ";
  document.querySelector(".productPriceValue14").style.display = "none ";
  document.getElementById ("deleteBasket14").style.display = "none ";
  localStorage.removeItem("arrPrice");
  let obj14 = obj[index14].price;
  const index = arrySumUp.indexOf(obj14);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  };

  EmptyArray();
  unCheck();

 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";
document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);
});


delateBasket15.addEventListener(`click`, function(){

  document.querySelector(".first15").style.display = "none";
  document.querySelector(".second15").style.display = " none";
  document.querySelector(".inputNumber15").style.display = "none ";
  document.querySelector(".productPriceValue15").style.display = "none ";
  document.getElementById ("deleteBasket15").style.display = "none ";
  localStorage.removeItem("arrPrice");

  let obj15 = obj[index15].price;

  const index = arrySumUp.indexOf(obj15);

  if (index > -1) {
    arrySumUp.splice(index, 1);
  };

  EmptyArray();
  unCheck();


 document.querySelector(".totalValue").innerHTML = arrySumUp.reduce(calculator)  + " PLN";

document.querySelector(".totalAllSpan").innerHTML = arrySumUp.reduce(calculator);

});


const btnOrder = document.getElementById("btnOrder");

const transfer1 = document.querySelector(".transfer1").checked=false
const transfer2 = document.querySelector(".transfer2").checked=false

btnOrder.addEventListener(`click`, ()=>{

  alert("sdssd");

  
  if(transfer1){
    alert("sdssd");

  }
  
});








 

 


  





  