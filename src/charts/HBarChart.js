import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { chartsDesc } from "../data/chartsDesc";
import { fetchData } from "../api/api";

const HBarChart = () => {
    const [mrfData, setMrfData] = useState([]);
    const [trucks, setTrucks] = useState([]);
    const [countries, setCountries] = useState([]);

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

    // const labels = countries
    const title = chartsDesc[3].title
    const data = {
        // labels: trucks,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: trucks,
            },
        ],
    };
    // const options = {
    //     indexAxis: 'y',
    //     elements: {
    //         bar: {
    //             borderWidth: 2,
    //         },
    //     },
    //     // responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'right',
    //         },
    //         title: {
    //             display: true,
    //             text: title,
    //         },
    //     },
    // };

    return (
        <div>
            <Bar data={data} />
        </div>
    );
};

export default HBarChart;