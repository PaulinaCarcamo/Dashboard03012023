import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { chartsDesc } from '../data/chartsDesc.js';
import { fetchData } from '../api/api.js';

const HBarChart = () => {
    const [mrfData, setMrfData] = useState([]);
    const [trucks, setTrucks] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        setMrfData(mrfData);
        // console.log(mrfData);

        //VEHICLE TYPES, ARRAY OF OBJ. FINDING OBJS WITH THE NAME: "TRUCK"
        //AFTER OBJS ARE FILTERED, UNDEFINED VALUES ARE NOT INCLUDED
        const vehicles = mrfData.Results
            .map((item) => item.VehicleTypes
                .find((item) => item.Name === "Passenger Car")
            ).filter((item) => item !== undefined)
        // console.log(vehicles);

        //OBJS WITH THE NAME "TRUCK" ARE DISPLAYED ALL TOGETHER WITH THE REST OF DATA
        const trucks = mrfData.Results.map((item) => item.VehicleTypes
            .find((item) => item.Name === "Passenger Car"))
        // setTrucks(trucks)

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
        // console.log(findPositions(trucks, queries));   

        //GETTING COUNTRIES BY INDEX, FIND POSITIONS(TRUCKS AND QUERIES)
        // const index = [0, 3, 28, 32, 38, 39, 49, 51, 54, 55, 56, 58, 77, 78, 82, 86];
        const countries = mrfData.Results.map((item) => item.Country)
        const index = findPositions(trucks, queries)
        const countriesByIndex = index.map(element => countries[element])
            .filter((type, index, array) => array.indexOf(type) === index);
        // console.log(countriesByIndex);

        //GETTING COUNTRIES WHICH MANUFACTURES TRUCKS
        const trucksByCountry = index.map(element => countries[element])
        //COUNTING ALL COUNTRIES WHICH MANUFACTURES TRUCKS
        const trucksCount = {};
        for (const element of trucksByCountry) {
            if (trucksCount[element]) {
                trucksCount[element] += 1;
            } else {
                trucksCount[element] = 1;
            }
        };
        console.log(trucksCount);
        setTrucks(trucksCount)
    };

    useEffect(() => {
        fetchApi();
    }, []);

    //PASSING DATA TO CHART, SELECTING KEYS AND VALUES TO ADD DATA IN THE CORRESPONDING LABELS
    const chartTitle = chartsDesc[3].title
    const mainLabel = chartsDesc[3].label
    const desc = chartsDesc[3].desc
    const allLabels = Object.keys(trucks)
    const selectedData = Object.values(trucks)

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

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default HBarChart;