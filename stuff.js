let p = document.getElementById("p")
let text = document.getElementById("text")
let text2 = document.getElementById("text2")
let text3 = document.getElementById("text3")

function setText(){
    p.innerHTML=text.value + "." + text2.value +"@" + text3.value + ".com"

    
    let r = Math.random() * 256
    let g = Math.random() * 256
    let b = Math.random() * 256
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    
    
    
}