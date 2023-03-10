import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { chartsDesc } from '../data/chartsDesc.js';
import { fetchData } from '../api/api.js';

//THIS CHART SHOWS AMOUNT OF MRFS PRODUCING PASSENGER CARS
const HBarChart = () => {
    // const [mrfData, setMrfData] = useState([]);
    const [cars, setCars] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        // setMrfData(mrfData);

        //VEHICLE TYPES, ARRAY OF OBJ. FINDING OBJS WITH THE NAME: "PASSENGER CAR"
        //AFTER OBJS ARE FILTERED, UNDEFINED VALUES ARE NOT INCLUDED
        const vehicles = mrfData.Results
            .map((item) => item.VehicleTypes
                .find((item) => item.Name === "Passenger Car")
            ).filter((item) => item !== undefined)
        // console.log(vehicles);

        //OBJS WITH THE NAME "PASSENGER CAR" ARE DISPLAYED ALL TOGETHER WITH THE REST OF DATA
        const cars = mrfData.Results.map((item) => item.VehicleTypes
            .find((item) => item.Name === "Passenger Car"))
        // setCars(cars)

        //TAKING TWO ARRAYS AS ARGUMENT TO RETURN ARRAY OF INDICES OF SECOND ARRAY PRESENT IN THE FIRST ARRAY
        const queries = vehicles;
        const findPositions = (first, second) => {
            const indices = [];
            first.forEach((element, index) => {
                if (second.includes(element)) {
                    indices.push(index);
                };
            });
            return indices;
        };
        // console.log(findPositions(cars, queries));   

        //GETTING COUNTRIES BY INDEX, FIND POSITIONS(CARS AND QUERIES)
        // const index = [0, 3, 28, 32, 38, 39, 49, 51, 54, 55, 56, 58, 77, 78, 82, 86];
        const countries = mrfData.Results.map((item) => item.Country)
        const index = findPositions(cars, queries)
        const countriesByIndex = index.map(element => countries[element])
            .filter((type, index, array) => array.indexOf(type) === index);
        console.log(countriesByIndex);

        //GETTING COUNTRIES WHICH MANUFACTURES CARS
        const carsByCountry = index.map(element => countries[element])
        //COUNTING ALL COUNTRIES WHICH MANUFACTURES CARS
        const carsCount = {};
        for (const element of carsByCountry) {
            if (carsCount[element]) {
                carsCount[element] += 1;
            } else {
                carsCount[element] = 1;
            }
        };
        // console.log(carsCount);
        setCars(carsCount)
    };

    useEffect(() => {
        fetchApi();
    }, []);

    //PASSING DATA TO CHART, SELECTING KEYS AND VALUES TO ADD DATA IN THE CORRESPONDING LABELS
    const chartTitle = chartsDesc[3].title
    const mainLabel = chartsDesc[3].label
    const desc = chartsDesc[3].desc
    const allLabels = Object.keys(cars)
    const selectedData = Object.values(cars)

    const data = {
        labels: allLabels,
        datasets: [
            {
                label: mainLabel,
                backgroundColor: ['#B1A8B9', '#E8D5B5', '#63BAAB'],
                data: selectedData,
            },
        ],
    };
    //HORIZONTAL CHART SPECIFICATIONS
    const options = {
        indexAxis: 'y',
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
    Chart.register();

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default HBarChart;