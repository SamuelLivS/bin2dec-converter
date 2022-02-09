const pError = document.getElementById('error')
const binaryInput = document.getElementById('binary')
const decimalOutput = document.getElementById('decimal')
let ivalid

function validadeInput(dt) {
    ivalid = true

    for (let i = 0; i < dt.value.length; i++) {
        if (dt.value[i] !== "0" && dt.value[i] !== "1") {
            ivalid = false
        }
    }

    msgError()
}

function msgError() {
    if (ivalid) {
        pError.innerHTML = ""
    } else {
        pError.innerHTML = "Entrada Inválida"
    }
    return
}

function convertBinToDec() {
    if (ivalid) {
        let res = 0
        let bin = binaryInput.value
        for (let i = bin.length - 1; i >= 0; i--) {
            res += parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i)
        }
        decimalOutput.value = res
    }

}