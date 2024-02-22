import { useEffect, useState } from "react";
import { Chart } from 'primereact/chart';

const GraficoPorGenero = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const buscarVisitantes = () => {
        fetch('http://localhost:8000/visitantes')
        .then(resposta => resposta.json())
        .then(visitantes => {
            const informacoes = {
                masculino: 0,
                feminino: 0,
                outros: 0
            }

            visitantes.map(v => {
                if(v.visitante_genero === "Masculino"){
                    informacoes.masculino += 1;
                    return;
                }
                if(v.visitante_genero === "Feminino"){
                    informacoes.feminino += 1;
                    return;
                }
                informacoes.outros += 1;
            })
            
            const data = {
                labels: ['Masculino', 'Feminino', 'Outros'],
                datasets: [
                    {
                        data: [informacoes.masculino, informacoes.feminino, informacoes.outros],
                        backgroundColor: [
                            '#3fd5ffab', 
                            '#ff3f3fab', 
                            '#a83fffab'
                        ],
                        hoverBackgroundColor: [
                            '#3fd5ff', 
                            '#ff3f3f', 
                            '#a83fff'
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

export default GraficoPorGenero;