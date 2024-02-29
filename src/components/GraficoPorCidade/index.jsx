import { useEffect, useState } from "react";
import { Chart } from 'primereact/chart';

const GraficoPorCidade = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const buscarVisitantes = () => {
        fetch('http://localhost:8080/visitantes/grafico-por-cidade')
        .then(resposta => resposta.json())
        .then(visitantes => {
            const data = {
                labels: visitantes.map(vis => vis.cidade),
                datasets: [
                    {
                        data: visitantes.map(vis => vis.total),
                        backgroundColor: [
                            '#3fd5ffab', 
                        ],
                        hoverBackgroundColor: [
                            '#3fd5ff',
                        ]
                    }
                ]
            }
            const options = {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            };
    
            setChartData(data);
            setChartOptions(options);
        })
    }

    useEffect(() => {
        buscarVisitantes();
    }, []);

    return (
        <>
            <Chart 
                type="pie" 
                data={chartData} 
                options={chartOptions} 
                className="w-full md:w-30rem"
            />
        </>
    );
}

export default GraficoPorCidade;