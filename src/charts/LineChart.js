import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { fetchData } from '../api/api.js';
import { chartsDesc } from '../data/chartsDesc.js';
import { Container } from 'react-bootstrap';

//THIS CHART SHOWS AMOUNT OF MRFS PRODUCING EACH TYPE OF VEHICLE
const LineChart = () => {
    const [mrfData, setMrfData] = useState([]);
    const [vehicleType, setVehicleType] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        setMrfData(mrfData);
        // console.log(mrfData);

        //GOING THROUGH VEHICLE TYPES WHICH CONTAINS ARRAY OF OBJS WITH NO ID
        //FILTER TO PUT ASIDE UNDEFINED DATA AND ALL LABELED AS "INCOMPLETE VEHICLE"
        const nameTypes = mrfData.Results
            .map((item) => item.VehicleTypes
                .map((item) => item.Name))
            .map((item) => { return item[0] })
            .filter((item) => (item !== undefined && item !== 'Incomplete Vehicle'))
        // console.log(nameTypes);

        //COUNTING ALL VEHICLES BY TYPE: "CARS", "TRUCKS", ETC.
        const count = {};
        for (const element of nameTypes) {
            if (count[element]) {
                count[element] += 1;
            } else {
                count[element] = 1;
            }
        };
        // console.log(count);
        setVehicleType(count)
    };

    useEffect(() => {
        fetchApi();
    }, []);

    //PASSING DATA TO CHART, VEHICLE TYPE AS SELECTED DATA, LABELS ARE DISPLAY ALL TOGETHER WITH DATA
    const chartTitle = chartsDesc[2].title
    const mainLabel = chartsDesc[2].label
    const desc = chartsDesc[2].desc
    const selectedData = vehicleType

    const data = {
        // labels: labels,
        datasets: [
            {
                label: mainLabel,
                data: selectedData,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            // legend: {
            //     position: 'right',
            // },
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
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;