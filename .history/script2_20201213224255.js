
 

const arry =[]


const rr = localStorage.getItem("arrPrice");

const ee = rr

console.log(rr)


arry.push(rr)


 



console.log(arry)


function getFullName(item) {
    var fullname = [item.id,item.price].join(" ");
    return fullname;
  }

  getFullName()
  
  console.log(arry.map(getFullName));
  



