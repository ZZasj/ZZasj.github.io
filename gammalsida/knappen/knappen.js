let siffra = 0

function plusClick(){

//alert("hej")

siffra = siffra + 1
console.log(siffra)
document.getElementById("taltext").innerHTML = siffra

}

const minusknapp = document.getElementById("minus")
minusknapp.addEventListener("click", minusClick)

function minusClick(){

    siffra--

    console.log(siffra)

}