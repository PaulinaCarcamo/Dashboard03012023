import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { fetchData } from '../api/api.js';
import { chartsDesc } from '../data/chartsDesc.js';
import { Container } from 'react-bootstrap';

//THIS CHART SHOWS AMOUNT OF MRFS STABLISHED IN EACH COUNTRY 
const BarChart = () => {
    const [mrfData, setMrfData] = useState([]);
    const [brandNames, setBrandNames] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        setMrfData(mrfData);
        // console.log(mrfData);

        //OBTAINING MRF NAMES (BRANDS) AND FILTERING OUT DUPLICATES
        const brandNames = mrfData.Results
            .map(item => item.Mfr_CommonName)
            .filter((name, index, array) => array.indexOf(name) === index);
        // console.log(brandNames);

        //COUNTING AMOUNT OF STABLISHMENTS (COMPANIES) OWNED BY BRANDS
        //SHOWING ALL VALUES BIGGER THAN 1 AND SETTING ASIDE NULL VALUES
        const counts = brandNames
            .map(name => ({
                name: name,
                count: mrfData.Results.filter(item => item.Mfr_CommonName === name).length
            })).filter((item) => (item.name !== null && item.count > 1));
        // console.log(counts);
        setBrandNames(counts);
    };
    useEffect(() => {
        fetchApi();
    }, []);

    //PASSING DATA TO CHART, MAPPING THROUGH COUNTS OF BRANDNAMES
    const chartTitle = chartsDesc[1].title
    const mainLabel = chartsDesc[1].label
    const desc = chartsDesc[1].desc
    const allLabels = brandNames.map((item) => item.name)
    const selectedData = brandNames.map((item) => item.count)

    const data = {
        labels: allLabels,
        datasets: [
            {
                label: mainLabel,
                backgroundColor: ["#ADA9BB", "#4774A3", "#7D77AF", "#49959D", "#35A481", "#AC8068", "#6EC37D"],
                borderColor: "rgb(255, 99, 132)",
                data: selectedData,
            },
        ],
    };

    const options = {
        plugins: {
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
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;