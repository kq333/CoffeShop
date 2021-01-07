
 



document.addEventListener('local', function(e) {

    const rr = document.querySelector(".productClone").innerHTML = localStorage.getItem(("storedNames"))



console.log(rr);
   
}, false);
