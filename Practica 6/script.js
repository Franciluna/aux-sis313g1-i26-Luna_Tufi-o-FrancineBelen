const visor = document.getElementById('txt-pantalla');
let operacionActual = '';

function agregar(valor) {
    if (visor.innerText === '0' && valor !== '.') {
        operacionActual = valor;
    } else {
        operacionActual += valor;
    }
    actualizar();
}

function operar(operador) {
    if (operacionActual === '') return;
    
    const ultimo = operacionActual.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(ultimo)) {
        operacionActual = operacionActual.slice(0, -1) + operador;
    } else {
        operacionActual += operador;
    }
    actualizar();
}

function limpiar() {
    operacionActual = '';
    visor.innerText = '0';
}

function calcular() {
    if (operacionActual === '') return;

    try {
        let resultado = eval(operacionActual);
        
        if (resultado % 1 !== 0) {
            resultado = parseFloat(resultado.toFixed(4));
        }

        visor.innerText = resultado;
        operacionActual = resultado.toString();
    } catch (e) {
        visor.innerText = 'Error';
        operacionActual = '';
    }
}

function actualizar() {
    let visual = operacionActual.replace(/\*/g, 'X').replace(/\//g, '÷');
    visor.innerText = visual === '' ? '0' : visual;
}