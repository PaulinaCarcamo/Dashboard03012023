import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { chartsDesc } from '../data/chartsDesc.js';
import { fetchData } from '../api/api.js';

//THIS CHART SHOWS AMOUNT OF MRFS PRODUCING TRUCK VEHICLES
const LineBlueChart = () => {
    // const [mrfData, setMrfData] = useState([]);
    const [trucks, setTrucks] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        // setMrfData(mrfData);

        //VEHICLE TYPES, ARRAY OF OBJ. FINDING OBJS WITH THE NAME: "TRUCK"
        //AFTER OBJS ARE FILTERED, UNDEFINED VALUES ARE NOT INCLUDED
        const vehicles = mrfData.Results
            .map((item) => item.VehicleTypes
                .find((item) => item.Name === "Truck ")
            ).filter((item) => item !== undefined)
        // console.log(vehicles);

        //OBJS WITH THE NAME "TRUCK" ARE DISPLAYED ALL TOGETHER WITH THE REST OF DATA
        const trucks = mrfData.Results.map((item) => item.VehicleTypes
            .find((item) => item.Name === "Truck "))
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
        console.log(countriesByIndex);

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
        // console.log(trucksCount);
        setTrucks(trucksCount)
    };

    useEffect(() => {
        fetchApi();
    }, []);

    //PASSING DATA TO CHART, SELECTING KEYS AND VALUES TO ADD DATA IN THE CORRESPONDING LABELS
    const chartTitle = chartsDesc[4].title
    const mainLabel = chartsDesc[4].label
    const desc = chartsDesc[4].desc
    const allLabels = Object.keys(trucks)
    const selectedData = Object.values(trucks)

    const data = {
        labels: allLabels,
        datasets: [
            {
                label: mainLabel,
                borderColor: '#0092CD',
                data: selectedData,
            },
        ],
    };

    const options = {
        responsive: true,
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
    Chart.register();

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineBlueChart;