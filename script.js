

btnAdd = document.getElementById("btn-add");
console.log(btnAdd)
btnSub = document.getElementById("btn-subtract");
console.log(btnAdd);
console.log(btnSub)
number = document.getElementById("number");
console.log(number);


// btnAdd.addEventListener("click", () => {
// });

let count = 0
btnAdd.addEventListener("click",() => {
  console.log("cliked");
    number.innerHTML = count++ ;
}
)

btnSub.addEventListener("click", () => {
  console.log("cliked");
  number.innerHTML = count--;
});