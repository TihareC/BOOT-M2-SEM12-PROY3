import {obtenerDatos} from './servicio.js';

let graficoActual = null;
const graficoMonedas = async () => {
    const input = document.getElementById('fecha');
    const data = await obtenerDatos(input.value);
    
    const monedas = Object.keys(data.rates).slice(0, 5);
    const valores = Object.values(data.rates).slice(0, 5);
    const ctx = document.getElementById('graficoMonedas');

    if(graficoActual != null)
        graficoActual.destroy();
    graficoActual = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: monedas,
            datasets: [{
                label: 'Valor de la moneda',
                data: valores,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    });
}

export {graficoMonedas}