
 

const local = document.getElementById("local");

local.addEventListener('click', function() {

    const rr = document.querySelector(".productClone").innerHTML = localStorage.getItem(("storedNames"))



    console.log(rr);
   
}, false);


const rr = document.querySelector(".productClone").innerHTML = localStorage.getItem(("storedNames"))

console.log(rr);