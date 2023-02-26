import { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
import { fetchData } from '../api/api.js';
import { chartsDesc } from '../data/chartsDesc.js';

//THIS CHART SHOWS AMOUNT OF MRFS BY COUNTRY
const DoughnutChart = () => {
    const [mrfData, setMrfData] = useState([]);
    const [countries, setCountries] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        setMrfData(mrfData);
        // console.log(mrfData);

        //FINDING COUNTRIES, GETTING ALL AND THEN FILTERING DUPLICATES
        const Countries = mrfData.Results
            .map(item => item.Country)
            .filter((name, index, array) => array.indexOf(name) === index);

        //COUNTING AMOUNT OF MANUFACTURERS BY COUNTRY
        const counts = Countries
            .map(name => ({
                name: name,
                count: mrfData.Results.filter(item => item.Country === name).length
            }));
        // console.log(counts);
        setCountries(counts);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    //PASSING DATA TO CHART, MAPPING THROUGH COUNTS OF MRFS BY COUNTRY
    const chartTitle = chartsDesc[0].title
    const mainLabel = chartsDesc[0].label
    const desc = chartsDesc[0].desc
    const allLabels = countries.map((item) => item.name)
    const selectedData = countries.map((item) => item.count)

    const data = {
        labels: allLabels,
        datasets: [
            {
                label: mainLabel,
                backgroundColor: ["#8cbeb2", "#8c98be", "#be8c98", "#beb28c", "#f2ebbf", "#e0f2bf", "#c6f2bf", "#bfc6f2", "#ebbff2", "#f9bfbf", "#f5c481"],
                borderColor: "white",
                data: selectedData,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: chartTitle,
            },
            subtitle: {
                display: true,
                text: desc
            }
        }
    };

    return (
        <div>
                <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;