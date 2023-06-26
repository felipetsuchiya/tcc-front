import csv from 'csv-parser';
import fs from 'fs';
import React, { useEffect } from 'react';
import { Chart as ChartJS } from "chart.js/auto";

const xValues = [];
const yValues = [];

fs.createReadStream('/dados.csv')
    .pipe(csv())
    .on('data', (row) => {
        // Processar cada linha do CSV
        xValues.push(row.x); // Supondo que 'x' é o cabeçalho da coluna x
        yValues.push(row.y); // Supondo que 'y' é o cabeçalho da coluna y
    })
    .on('end', () => {
        // Criar o gráfico usando os arrays de valores x e y
        // Aqui você pode chamar a função que renderiza o gráfico usando Chart.js
        renderChart(xValues, yValues);
    });

function ChartComponent({ xValues, yValues }) {
    useEffect(() => {
        // Configurar o contexto do canvas
        const ctx = document.getElementById('chart').getContext('2d');

        // Criar o gráfico
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [
                    {
                        label: 'Valores de Y',
                        data: yValues,
                        borderColor: 'blue',
                        fill: false,
                    },
                ],
            },
            options: {
                // Configurações adicionais do gráfico
            },
        });
    }, [xValues, yValues]);

    return <canvas id="chart" />;
}

export default ChartComponent;
