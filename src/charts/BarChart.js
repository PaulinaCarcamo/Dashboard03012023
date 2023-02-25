import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { fetchData } from "../api/api.js";
import { chartsDesc } from "../data/chartsDesc.js";

const BarChart = () => {

    const [mrfData, setMrfData] = useState([]);
    const [names, setNames] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        setMrfData(mrfData);
        // console.log(mrfData);

        const Names = mrfData.Results
            .map(dataItem => dataItem.Mfr_CommonName) // get all media types
            .filter((name, index, array) => array.indexOf(name) === index); // filter out duplicates
        // console.log(Names);

        const counts = Names
            .map(name => ({
                name: name,
                count: mrfData.Results.filter(item => item.Mfr_CommonName === name).length
            })).filter((item) => (item.name !== null && item.count > 1));
        setNames(counts);
        console.log(counts);
        //Taking out info, all null values. Showing values more than 1
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const labels = names.map((item) => item.name)
    const title = chartsDesc.map((item) => item.title)

    const data = {
        labels: labels,
        datasets: [
            {
                label: title[1],
                backgroundColor: ["#ADA9BB", "#4774A3", "#7D77AF", "#49959D", "#35A481", "#AC8068", "#6EC37D"],
                borderColor: "rgb(255, 99, 132)",
                data: names.map((item) => item.count),
            },
        ],
    };
    return (
        <div>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;