
 
const rr = document.querySelector(".productClone").innerHTML = localStorage.getItem(("storedNames"))



console.log(rr)


let healthScore = localStorage.getItem("storedNames");
if(storedNames == undefined) {
  localStorage.setItem("storedNames");
}

console.log(healthScore)