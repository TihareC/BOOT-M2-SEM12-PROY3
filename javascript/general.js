import {graficoMonedas} from './grafico.js';

const ponerFechasEnInput = () => {
    const input = document.getElementById('fecha');
    const fechaActual = new Date().toISOString().slice(0, 10);
    const fechaMenosUnMes = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().slice(0, 10);
    input.setAttribute('max', fechaActual);
    input.setAttribute('min', fechaMenosUnMes);
    input.value = fechaActual;
    input.addEventListener('change', () => {
        graficoMonedas();
    });
}

export {ponerFechasEnInput};