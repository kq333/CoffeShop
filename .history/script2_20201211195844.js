
 

const arry =[]


const rr = localStorage.getItem(("arrPrice"));



console.log(rr);

 



function getFullName(item) {
  var fullname = [item.id].join(" ");
  return fullname;
}

const r = persons.map(getFullName)


console.log(r);
