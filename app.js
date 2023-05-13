// This is not a valid number!!!
const btn = document.querySelector(".button")
const input1 = document.querySelector(".in1")
const input2 = document.querySelector(".in2")
const input3 = document.querySelector(".in3")

const text3 = document.querySelector(".span3")
const text4 = document.querySelector(".span4")

let obj = {
    name:"",
    lastname:"",
    fulname:""
}

btn.addEventListener("click", () =>{
    let inText = input1.value
    let inText2 = input2.value
    let inText3 = input3.value

    let year = 2023
    let age = year - inText 
    if(input1.value > 0){
        text3.textContent = age
    };
function fun(){
    this.name = inText2
    this.lastname = inText3
    this.fulname = inText2 + " " + inText3
    text4.textContent = this.fulname
}
fun.call(obj)
})
