///// geting value from JSON ///

const rr = localStorage.getItem("arrPrice");
let obj = JSON.parse(rr);





/// Displaying values from Object to new page ///////





// const key = Object.keys(rr)


//const values = Object.values(rr)

 //let car = key.includes("id");



//const obj11 = Object.entries(obj)

 //console.log(rr.includes("id1"));


 // console.log(rr.hasOwnProperty("id1"))


var index = obj.findIndex(function(person){
  return person.attr1 == "price"
});



console.log(index)











if(rr.includes("id1")){
  if(rr.includes("price")){
    console.log(obj[0].price)
  }


  document.querySelector(".second1").innerHTML = obj[0].number + " szt.";
  document.querySelector(".productPriceValue1").innerHTML = obj[0].price  + " PLN" ;
  document.querySelector(".inputNumber1").innerHTML = 35.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket1");

  document.querySelector(".first1").style.display = "block";
  document.querySelector(".second1").style.display = "block";
  document.querySelector(".inputNumber1").style.display = "block";
  document.querySelector(".productPriceValue1").style.display = "block";
  document.getElementById ("deleteBasket1").style.display = "block";


}


if(rr.includes("id2")){

  document.querySelector(".second2").innerHTML = obj[0].number + " szt.";
  document.querySelector(".productPriceValue2").innerHTML = obj[0].price  + " PLN" ;
  document.querySelector(".inputNumber2").innerHTML = 45.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket2");


  document.querySelector(".first2").style.display = "block";
  document.querySelector(".second2").style.display = "block";
  document.querySelector(".inputNumber2").style.display = "block";
  document.querySelector(".productPriceValue2").style.display = "block";
  document.getElementById ("deleteBasket2").style.display = "block";




 
  
  };



  if(rr.includes("id3")){

    document.querySelector(".second3").innerHTML = obj[0].number + " szt.";
  document.querySelector(".productPriceValue3").innerHTML = obj[0].price  + " PLN" ;
  document.querySelector(".inputNumber3").innerHTML = 32.00 + " PLN";
  const deleteBasket = document.querySelector(".deleteBasket3");

  document.querySelector(".first3").style.display = "block";
  document.querySelector(".second3").style.display = "block";
  document.querySelector(".inputNumber3").style.display = "block";
  document.querySelector(".productPriceValue3").style.display = "block";
  document.getElementById ("deleteBasket3").style.display = "block";


  
  };









  