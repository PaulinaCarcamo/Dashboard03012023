import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { fetchData } from "../api/api.js";
import { chartsDesc } from "../data/chartsDesc.js";

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
            //Looking for objects with no id
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
        console.log(count);
        setVehicleType(count)
    };

    useEffect(() => {
        fetchApi();
    }, []);

    // const labels = vehicleType
    const title = chartsDesc.map((item) => item.title)

    const data = {
        // labels: labels,
        datasets: [
            {
                label: title[2],
                // backgroundColor: ["#ADA9BB", "#4774A3", "#7D77AF", "#49959D", "#35A481", "#AC8068", "#6EC37D"],
                // borderColor: "rgb(255, 99, 132)",
                data: vehicleType,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
        ],
    };
    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default LineChart;