
 

const arry =[]


const rr = localStorage.getItem(("arrPrice"));



console.log(rr);

 



function getFullName(item) {
  var fullname = [item.id].join(" ");
  return fullname;
}

const r = rr.map(getFullName)


console.log(r);
