// let plus = document.querySelector(".plus");
// let minus = document.querySelector(".minus");

// let input = document.querySelector("input"); 
// plus.addEventListener("click" , function(){
//     let quantity = Number(input.value);
//     quantity += 1;
//     input.value = quantity;
// })

let jog = document.querySelector(".plus");
let biyog = document.querySelector(".mainus");

let input = document.querySelector("input");
jog.addEventListener("click", function(){
    let total = Number(input.value);
    total += 1;
    input.value = total;
})
biyog.addEventListener("click", function(){  
    if (input.value > 1) {
        input.value = Number(input.value) - 1;
    }

})
input.addEventListener("keyup" , function(){
    let positiveNumber = Math.abs(input.value);
    input.value = positiveNumber;
})