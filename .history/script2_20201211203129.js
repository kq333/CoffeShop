
 

const arry =[]


const rr = localStorage.getItem("arrPrice");



console.log(rr);

 

const y = rr.map(({ id }) => id)




console.log(y);





function getFullName(item) {
  var fullname = [item.id,item.product].join(" ");
  return fullname;
}

 const t = persons.map(getFullName);


console.log(t);



