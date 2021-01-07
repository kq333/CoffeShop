
let btnAppend1 = document.getElementById("btn1");
let btnAppend2 = document.getElementById("btn2");
let btnAppend3 = document.getElementById("btn3");
let btnAppend4 = document.getElementById("btn4");
let btnAppend5 = document.getElementById("btn5");
let btnAppend6 = document.getElementById("btn6");
let btnAppend7 = document.getElementById("btn7");
let btnAppend8 = document.getElementById("btn8");
let btnAppend9 = document.getElementById("btn9");
let btnAppend10 = document.getElementById("btn10");
let btnAppend11 = document.getElementById("btn11");
let btnAppend12 = document.getElementById("btn12");
let btnAppend13 = document.getElementById("btn13");
let btnAppend14 = document.getElementById("btn14");
let btnAppend15 = document.getElementById("btn15");


///// Arrays

let arr =[];

let arrPrice =[];

///////Array`s sum up function

let initialValue = 0;
let initialValue2 = 0

 arrSum = () =>{  

let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.price 
}, initialValue)

let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.number*1;
}, initialValue2)
 
document.querySelector(".priceTo").innerHTML = add + " PLN"   
document.querySelector(".num").innerHTML = (numbers*1) + " szt."



 // let val = arrPrice.reduce(function(previousValue, currentValue) {
 // return {

 //   number: previousValue.number*1 + currentValue.number*1,
  //  price: previousValue.price + currentValue.price

//  }
//})
};

//// Constructor function for product

function Product(name, price, quantity){
  this.id = name;
  this.price = price;
  this.quantity = quantity;
  
};

//// Create Product object

let myProduct1 = new Product("Lavazza", 35, 1);
let myProduct2 = new Product("Dallmayr", 45, 1);
let myProduct3 = new Product("Dallmayr", 32, 1);
let myProduct4 = new Product("Lavazza", 55, 1);
let myProduct5 = new Product("Lavazza", 55, 1);
let myProduct6 = new Product("Illy", 51, 1);
let myProduct7 = new Product("Lavazza", 49, 1);
let myProduct8 = new Product("Lavazza", 53.50, 1);
let myProduct9 = new Product("Inka", 47, 1);
let myProduct10 = new Product("MK Cafe", 43, 1);
let myProduct11 = new Product("Tupinambra", 35, 1);
let myProduct12 = new Product("Tchibo", 46, 1);
let myProduct13 = new Product("Woseba", 49, 1);
let myProduct14 = new Product("Woseba", 32, 1);
let myProduct15 = new Product("Kimbo", 55, 1);

//////////  btns

btnAppend1.addEventListener(`click`, () => {
    let quantity = document.getElementById("quantity1").value;
    if(quantity>0){
      const createLi = document.querySelector(".li");
      const product1 = document.querySelector(".img1");
      const element = product1.cloneNode(true);
      createLi.appendChild(element);
      const addToPopUp = document.querySelector(".popup");
      addToPopUp.style.display = "block";
      product1.style.display = "block";
      let intager = document.querySelector(".intager").innerHTML = quantity ;
     let priceTo =  (myProduct1.quantity*quantity)*myProduct1.price ;
     let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;  
     document.querySelector(".quant").innerHTML = intager + " szt.";
     arr.push("a");
     arrPrice = arrPrice.filter(person => person.id != 'product1');

const obj = arrPrice.push({
  id: "product1",
  price: priceTo,
  number: quantity,}
);
}
});

btnAppend2.addEventListener(`click`, () => {

    const quantity = document.getElementById("quantity2").value;

    if(quantity>0){
      const createLi = document.querySelector(".li");
      const product2 = document.querySelector(".img2");
      const element = product2.cloneNode(true);
      createLi.appendChild(element);
      const addToPopUp = document.querySelector(".popup");
      addToPopUp.style.display = "block";
      product2.style.display = "block";
      let intager = document.querySelector(".intager").innerHTML = quantity;  
      const priceTo = (myProduct2.quantity*quantity)*myProduct2.price;
      let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
      let basketIntager = document.querySelector(".num").innerHTML = intager;
      document.querySelector(".quant2").innerHTML = intager + " szt."; 
      arr.push("b");
      arrPrice = arrPrice.filter(person => person.id != 'product2');

    
     
  const obj = arrPrice.push({
  id: "product2",
  price: priceTo,
  number: quantity,}
);    
}});

btnAppend3.addEventListener(`click`, () => {

  const quantity = document.getElementById("quantity3").value;

  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product3 = document.querySelector(".img3");
    const element = product3.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product3.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct3.quantity*quantity)*myProduct3.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant3").innerHTML = intager + " szt."; 
    arr.push("c");
    arrPrice = arrPrice.filter(person => person.id != 'product3');
   
const obj = arrPrice.push({
id: "product3",
price: priceTo,
number: quantity,}
);    
}});

btnAppend4.addEventListener(`click`, () => {

  const quantity = document.getElementById("quantity4").value;

  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product4 = document.querySelector(".img4");
    const element = product4.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product4.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct4.quantity*quantity)*myProduct4.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant4").innerHTML = intager + " szt."; 
    arr.push("d");
    arrPrice = arrPrice.filter(person => person.id != 'product4');
   
const obj = arrPrice.push({
id: "product4",
price: priceTo,
number: quantity,}
);    
}});

btnAppend5.addEventListener(`click`, () => {

  const quantity = document.getElementById("quantity5").value;

  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product5 = document.querySelector(".img5");
    const element = product5.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product5.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct5.quantity*quantity)*myProduct5.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant5").innerHTML = intager + " szt."; 
    arr.push("e");
    arrPrice = arrPrice.filter(person => person.id != 'product5');
   
const obj = arrPrice.push({
id: "product5",
price: priceTo,
number: quantity,}
);    
}});

btnAppend6.addEventListener(`click`, () => {
    const quantity = document.getElementById("quantity6").value;
    if(quantity>0){
    const createLi = document.querySelector(".li");
    const product6 = document.querySelector(".img6");
    const element = product6.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product6.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct6.quantity*quantity)*myProduct6.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant6").innerHTML = intager + " szt."; 
    arr.push("f");
    arrPrice = arrPrice.filter(person => person.id != 'product6');
   
const obj = arrPrice.push({
id: "product6",
price: priceTo,
number: quantity,}
);    
}});

btnAppend7.addEventListener(`click`, () => {
    const quantity = document.getElementById("quantity7").value;
  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product7 = document.querySelector(".img7");
    const element = product7.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product7.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct7.quantity*quantity)*myProduct7.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant7").innerHTML = intager + " szt."; 
    arr.push("g");
    arrPrice = arrPrice.filter(person => person.id != 'product7');
   
const obj = arrPrice.push({
id: "product7",
price: priceTo,
number: quantity,}
);    
}});

btnAppend8.addEventListener(`click`, () => {

  const quantity = document.getElementById("quantity8").value;

  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product8 = document.querySelector(".img8");
    const element = product8.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product8.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct8.quantity*quantity)*myProduct8.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant8").innerHTML = intager + " szt."; 
    arr.push("h");
    arrPrice = arrPrice.filter(person => person.id != 'product8');
   
const obj = arrPrice.push({
id: "product8",
price: priceTo,
number: quantity,}
);    
}});

btnAppend9.addEventListener(`click`, () => {
const quantity = document.getElementById("quantity9").value;
  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product9 = document.querySelector(".img9");
    const element = product9.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product9.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct9.quantity*quantity)*myProduct9.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant9").innerHTML = intager + " szt."; 
    arr.push("i");
    arrPrice = arrPrice.filter(person => person.id != 'product9');
   
const obj = arrPrice.push({
id: "product9",
price: priceTo,
number: quantity,}
);    
}});

btnAppend10.addEventListener(`click`, () => {
  const quantity = document.getElementById("quantity10").value;
  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product10 = document.querySelector(".img10");
    const element = product10.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product10.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct10.quantity*quantity)*myProduct10.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant10").innerHTML = intager + " szt."; 
    arr.push("j");
    arrPrice = arrPrice.filter(person => person.id != 'product10');
   
const obj = arrPrice.push({
id: "product10",
price: priceTo,
number: quantity,}
);    
}});

btnAppend11.addEventListener(`click`, () => {
  const quantity = document.getElementById("quantity11").value;
  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product11 = document.querySelector(".img11");
    const element = product11.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product11.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct10.quantity*quantity)*myProduct11.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant11").innerHTML = intager + " szt."; 
    arr.push("k");
    arrPrice = arrPrice.filter(person => person.id != 'product11');
   
const obj = arrPrice.push({
id: "product11",
price: priceTo,
number: quantity,}
);    
}});

btnAppend12.addEventListener(`click`, () => {
  const quantity = document.getElementById("quantity12").value;
  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product12 = document.querySelector(".img12");
    const element = product12.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product12.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct12.quantity*quantity)*myProduct12.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant12").innerHTML = intager + " szt."; 
    arr.push("l");
    arrPrice = arrPrice.filter(person => person.id != 'product12');
   
const obj = arrPrice.push({
id: "product12",
price: priceTo,
number: quantity,}
);    
}});

btnAppend13.addEventListener(`click`, () => {
  const quantity = document.getElementById("quantity13").value;
  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product13 = document.querySelector(".img13");
    const element = product13.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product13.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct13.quantity*quantity)*myProduct13.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant13").innerHTML = intager + " szt."; 
    arr.push("m");
    arrPrice = arrPrice.filter(person => person.id != 'product13');
   
const obj = arrPrice.push({
id: "product13",
price: priceTo,
number: quantity,}
);    
}});

btnAppend14.addEventListener(`click`, () => {
  const quantity = document.getElementById("quantity14").value;
  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product14 = document.querySelector(".img14");
    const element = product14.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product14.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct14.quantity*quantity)*myProduct14.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant14").innerHTML = intager + " szt."; 
    arr.push("n");
    arrPrice = arrPrice.filter(person => person.id != 'product14');
   
const obj = arrPrice.push({
id: "product14",
price: priceTo,
number: quantity,}
);    
}});

btnAppend15.addEventListener(`click`, () => {
  const quantity = document.getElementById("quantity15").value;
  if(quantity>0){
    const createLi = document.querySelector(".li");
    const product15 = document.querySelector(".img15");
    const element = product15.cloneNode(true);
    createLi.appendChild(element);
    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "block";
    product15.style.display = "block";
    let intager = document.querySelector(".intager").innerHTML = quantity;  
    const priceTo = (myProduct15.quantity*quantity)*myProduct15.price;
    let totalBasket = document.querySelector(".totalBasketPrice").innerHTML = priceTo;
    let basketIntager = document.querySelector(".num").innerHTML = intager;
    document.querySelector(".quant15").innerHTML = intager + " szt."; 
    arr.push("o");
    arrPrice = arrPrice.filter(person => person.id != 'product15');
   
const obj = arrPrice.push({
id: "product15",
price: priceTo,
number: quantity,}
);    
}});
 

//popup buttons

let popUpBtnClose = document.getElementById("btnClose"); 
let popUpBtnContinue = document.getElementById("btnContinue");
let popUpBtnOrder = document.getElementById("btnOrder");

//popup: close popup

/* popUpBtnClose.addEventListener(`click`, ()=>{

    const addToPopUp = document.querySelector(".popup");
    addToPopUp.style.display = "none";
    const createLi = document.querySelector(".li");
    const createElement = document.createElement("li");
    createLi.removeChild(createLi.childNodes[0]);
   */ 

/////Popracuj nad odejmowaniem z koszyka przy przycisku "zamknij"


  //  document.getElementById("quantity1").value = "0";
  //  document.getElementById("quantity2").value = "0";
   // document.getElementById("quantity3").value = "0";
  //});

//// button remove from basket  

const btnDelate1 = document.getElementById("btnDelate1");
btnDelate1.addEventListener(`click`, ()=>{
document.querySelector(".l1").style.display = "none";
arrPrice = arrPrice.filter(person => person.id != 'product1');

let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
}, initialValue);

let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);

document.querySelector(".priceTo").innerHTML = (add)*-1;   
document.querySelector(".num").innerHTML = (numbers*1)*-1;
document.getElementById("quantity1").value = 0;
const value = "a";
arr = arr.filter(item => item !== value);







///////////////////////////////////////////////////////

//document.querySelector(".border").style.display = ""

});


const btnDelate2 = document.getElementById("btnDelate2");
btnDelate2.addEventListener(`click`, ()=>{
  document.querySelector(".l2").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product2');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1;   
document.querySelector(".num").innerHTML = (numbers*1)*-1;
document.getElementById("quantity2").value = 0;
const value = "b";
arr = arr.filter(item => item !== value);


});

const btnDelate3 = document.getElementById("btnDelate3");
btnDelate3.addEventListener(`click`, ()=>{
  document.querySelector(".l3").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product3');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity3").value = 0;
const value = "c";
arr = arr.filter(item => item !== value)

});

const btnDelate4 = document.getElementById("btnDelate4");
btnDelate4.addEventListener(`click`, ()=>{
  document.querySelector(".l4").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product4');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity4").value = 0;
const value = "d";
arr = arr.filter(item => item !== value)

});

const btnDelate5 = document.getElementById("btnDelate5");
btnDelate5.addEventListener(`click`, ()=>{
  document.querySelector(".l5").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product5');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity5").value = 0;
const value = "e";
arr = arr.filter(item => item !== value)

});

const btnDelate6 = document.getElementById("btnDelate6");
btnDelate6.addEventListener(`click`, ()=>{
  document.querySelector(".l6").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product6');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity6").value = 0;
const value = "f";
arr = arr.filter(item => item !== value)

});

const btnDelate7 = document.getElementById("btnDelate7");
btnDelate7.addEventListener(`click`, ()=>{
  document.querySelector(".l7").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product7');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity7").value = 0;
const value = "g";
arr = arr.filter(item => item !== value)

});

const btnDelate8 = document.getElementById("btnDelate8");
btnDelate8.addEventListener(`click`, ()=>{
  document.querySelector(".l8").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product8');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity8").value = 0;
const value = "h";
arr = arr.filter(item => item !== value)

});

const btnDelate9 = document.getElementById("btnDelate9");
btnDelate9.addEventListener(`click`, ()=>{
  document.querySelector(".l9").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product9');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity9").value = 0;
const value = "i";
arr = arr.filter(item => item !== value)

});

const btnDelate10 = document.getElementById("btnDelate10");
btnDelate10.addEventListener(`click`, ()=>{
  document.querySelector(".l10").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product10');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity10").value = 0;
const value = "j";
arr = arr.filter(item => item !== value)

});

const btnDelate11 = document.getElementById("btnDelate11");
btnDelate11.addEventListener(`click`, ()=>{
  document.querySelector(".l11").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product11');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity11").value = 0;
const value = "k";
arr = arr.filter(item => item !== value)

});

const btnDelate12 = document.getElementById("btnDelate12");
btnDelate12.addEventListener(`click`, ()=>{
  document.querySelector(".l12").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product12');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity12").value = 0;
const value = "l";
arr = arr.filter(item => item !== value)

});

const btnDelate13 = document.getElementById("btnDelate13");
btnDelate13.addEventListener(`click`, ()=>{
  document.querySelector(".l13").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product13');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity13").value = 0;
const value = "m";
arr = arr.filter(item => item !== value)

});

const btnDelate14 = document.getElementById("btnDelate14");
btnDelate14.addEventListener(`click`, ()=>{
  document.querySelector(".l14").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product14');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity14").value = 0;
const value = "n";
arr = arr.filter(item => item !== value)

});

const btnDelate15 = document.getElementById("btnDelate15");
btnDelate15.addEventListener(`click`, ()=>{
  document.querySelector(".l15").style.display = "none"
  arrPrice = arrPrice.filter(person => person.id != 'product15');
  let add = arrPrice.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue.price 
    }, initialValue);
let numbers = arrPrice.reduce(function (accumulator, currentValue) {
  return accumulator - currentValue.number*1;
}, initialValue2);
document.querySelector(".priceTo").innerHTML = (add)*-1    
document.querySelector(".num").innerHTML = (numbers*1)*-1
document.getElementById("quantity15").value = 0;
const value = "o";
arr = arr.filter(item => item !== value)

});

// continue shopping Btn
  
  popUpBtnContinue.addEventListener(`click`,  ()=>{
     aa = () =>{
      const addToPopUp = document.querySelector(".popup");
      addToPopUp.style.display = "none";
      const createLi = document.querySelector(".li");
      const createElement = document.createElement("li");
      createLi.removeChild(createLi.childNodes[0]);
      arr.push("z")
};

aa();

    if(arr.includes("a")===true){
       let quantity = document.getElementById("quantity1").value;
       document.querySelector(".l1").style.display ="block";
       let quantPrice = document.querySelector(".quantPrice").innerHTML = (myProduct1.quantity*quantity)*myProduct1.price + ",00 PLN";
    }
    
    if(arr.includes("b")===true){
      let quantity = document.getElementById("quantity2").value;
      document.querySelector(".l2").style.display ="block";
      let quantPrice = document.querySelector(".quantPrice2").innerHTML = (myProduct2.quantity*quantity)*myProduct2.price + ",00 PLN";
   }

   if(arr.includes("c")===true){
    let quantity = document.getElementById("quantity3").value;
    document.querySelector(".l3").style.display ="block";
    let quantPrice = document.querySelector(".quantPrice3").innerHTML = (myProduct3.quantity*quantity)*myProduct3.price + ",00 PLN";
 }

 if(arr.includes("d")===true){
  let quantity = document.getElementById("quantity4").value;
  document.querySelector(".l4").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice4").innerHTML = (myProduct4.quantity*quantity)*myProduct4.price + ",00 PLN";
}

if(arr.includes("e")===true){
  let quantity = document.getElementById("quantity5").value;
  document.querySelector(".l5").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice5").innerHTML = (myProduct5.quantity*quantity)*myProduct5.price + ",00 PLN";
}

if(arr.includes("f")===true){
  let quantity = document.getElementById("quantity6").value;
  document.querySelector(".l6").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice6").innerHTML = (myProduct6.quantity*quantity)*myProduct6.price + ",00 PLN";
}

if(arr.includes("g")===true){
  let quantity = document.getElementById("quantity7").value;
  document.querySelector(".l7").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice7").innerHTML = (myProduct7.quantity*quantity)*myProduct7.price + ",00 PLN";
}

if(arr.includes("h")===true){
  let quantity = document.getElementById("quantity8").value;
  document.querySelector(".l8").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice8").innerHTML = (myProduct8.quantity*quantity)*myProduct8.price + ",00 PLN";
}

if(arr.includes("i")===true){
  let quantity = document.getElementById("quantity9").value;
  document.querySelector(".l9").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice9").innerHTML = (myProduct9.quantity*quantity)*myProduct9.price + ",00 PLN";
}

if(arr.includes("j")===true){
  let quantity = document.getElementById("quantity10").value;
  document.querySelector(".l10").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice10").innerHTML = (myProduct10.quantity*quantity)*myProduct10.price + ",00 PLN";
}

if(arr.includes("k")===true){
  let quantity = document.getElementById("quantity11").value;
  document.querySelector(".l11").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice11").innerHTML = (myProduct11.quantity*quantity)*myProduct11.price + ",00 PLN";
}

if(arr.includes("l")===true){
  let quantity = document.getElementById("quantity12").value;
  document.querySelector(".l12").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice12").innerHTML = (myProduct12.quantity*quantity)*myProduct12.price + ",00 PLN";
}

if(arr.includes("m")===true){
  let quantity = document.getElementById("quantity13").value;
  document.querySelector(".l13").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice13").innerHTML = (myProduct13.quantity*quantity)*myProduct13.price + ",00 PLN";
}

if(arr.includes("n")===true){
  let quantity = document.getElementById("quantity14").value;
  document.querySelector(".l14").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice14").innerHTML = (myProduct14.quantity*quantity)*myProduct14.price + ",00 PLN";
}

if(arr.includes("o")===true){
  let quantity = document.getElementById("quantity15").value;
  document.querySelector(".l15").style.display ="block";
  let quantPrice = document.querySelector(".quantPrice15").innerHTML = (myProduct15.quantity*quantity)*myProduct15.price + ",00 PLN";
}

arrSum();

});

///////////////////////////// btnOrder

//const btnOrder = document.getElementById("btnOrder");

//btnOrder.addEventListener(`click`, function(){
 
  
//})



/////////hover Effect

document.querySelector(".basketName").onmouseover = function() {mouseOver()};
document.querySelector(".basketName").onmouseout = function() {mouseOut()};





function mouseOver(){

    let list = document.querySelector(".list").style.display = "block";
  

    if(arr.includes("z")){
      document.querySelector(".border").style.display = "block";
    }
};









function mouseOut(){

  




 setTimeout(function(){
      document.querySelector(".border").style.display = "";
      document.querySelector(".list").style.display = "";
 },5000)
};





const r = document.querySelector(".l1");

var isVisible = (r.style.display != "none");

console.log(isVisible)

if(isVisible ==true){

const index = arr.indexOf("z")
if (index > -1) { arr.splice(index, 1) }}














////////local storage ////////////


btnBorder.addEventListener(`click`, function(){

  localStorage.setItem("arrPrice", JSON.stringify(arrPrice));
  let storedNames = JSON.parse(localStorage.getItem("arrPrice"));

});

