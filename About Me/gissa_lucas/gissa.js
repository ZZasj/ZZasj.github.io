const slumptal = Math.floor(Math.random() * 9) + 1
let antalgissningar = 0

slump = Math.random()

function GissaTal() {
    console.log(`slumptal = ${slumptal}`)
    let textfelt_gissa = document.getElementById("Gissa").value
    let gissa_int = Number(textfelt_gissa)
    let vinn = false
    let P_svar = document.getElementById("P_svar")

    if (antalgissningar < 3) {

        if (slumptal === gissa_int) {

            console.log(`Rätt svar`)
            vinn = true
            P_svar.innerHTML = "DU VANN!!!"

        }
        else {
            console.log(`Fel svar!!`)

            if (antalgissningar === 2){
                P_svar.innerHTML = "Looser!!"
            }
            else{
                P_svar.innerHTML = `Fel svar!! ${gissa_int}`
            }
            document.getElementById("Gissa").value=""
            document.getElementById("Gissa").focus()
        }


    }

}


