
 

const local = document.getElementById("local");

local.addEventListener('click', function(e) {

    const rr = document.querySelector(".productClone").innerHTML = localStorage.getItem(("storedNames"))



console.log(rr);
   
}, false);
