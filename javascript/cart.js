let count = 0;
function decrease() {
   if (count>0){
    count -= 1;
    let quantity = document.querySelector("#quantity")
    quantity.value = count;
   }
}
function increase() {
    count += 1;
    let quantity = document.querySelector("#quantity")
    quantity.value = count;
}