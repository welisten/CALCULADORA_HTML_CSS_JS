let totalExecutado = 0
let retentor = "0"
let operadorAnterior

const tela = document.querySelector('.tela')

function clickDoBotao(valor){
    if(isNaN(valor)){
        tratamentoSimbolo(valor)
    }else{
        tratamentoNumero(valor)
    }
    tela.innerText = retentor

}

function tratamentoSimbolo(simbolo){
    switch(simbolo){
        case 'C':
            retentor = '0'
            totalExecutado= 0
            break
        case '=':
            if(operadorAnterior === null){
                return
            }
            executarOperacao(parseInt(retentor))
            operadorAnterior = null
            retentor = totalExecutado
            totalExecutado = 0
            break
       case '←':
            if(retentor.length ===1){
                retentor = '0'
            }else{
                retentor = retentor.substring(0, retentor.length -1)
            }
            break
        case '+':
        case '−':
        case '×':
        case '÷':
            tratamento_Math(simbolo)
            break

    }
}

function tratamento_Math(simbolo){
    if(retentor === '0'){
        return
    }

    const intRetentor = parseInt(retentor)

    if(totalExecutado === 0){
        totalExecutado = intRetentor
    }else{
        executarOperacao(intRetentor)
    }
    operadorAnterior = simbolo
    retentor = '0'
}

function executarOperacao(intRetentor){
    if(operadorAnterior === '+'){
        totalExecutado += intRetentor
    }else if(operadorAnterior === '−'){
        totalExecutado -= intRetentor
    } else if(operadorAnterior === '×' ){
        totalExecutado *= intRetentor
    }else if(operadorAnterior === '÷'){
        totalExecutado /= intRetentor
    }
}

function tratamentoNumero(numeroString){
    if (retentor === "0") {
        retentor = numeroString
    }else{
        retentor += numeroString
    }

}

function init(){
    document.querySelector('.calc-botoes').addEventListener('click', function (event){
        clickDoBotao(event.target.innerText)  
    })

}

init();