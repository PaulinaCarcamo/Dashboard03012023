import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { fetchData } from "../api/api";

const BarChart = () => {

    const [mrfData, setMrfData] = useState([]);

    const [countries, setCountries ] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        setMrfData(mrfData);
        // console.log(mrfData);

        // const findData = mrfData.Results.filter(element => element.Country === "GERMANY");
        // // console.log(findData);
        // const findCount = findData.length;
        // console.log(findCount);

        const Countries = mrfData.Results
            .map(dataItem => dataItem.Country) // get all media types
            .filter((mediaType, index, array) => array.indexOf(mediaType) === index); // filter out duplicates

        const counts = Countries
            .map(mediaType => ({
                type: mediaType,
                count: mrfData.Results.filter(item => item.Country === mediaType).length
            }));

            setCountries(counts);
            console.log(counts);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    //   const labels = ["GERMANY", "February", "March", "April", "May", "June"];
    // const labels = mrfData.Results?.slice(0, 6).map((item) => { return item.Country });
    const labels = countries.map((item) => item.type)

    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                // data: [10, 5, 2, 20, 30, 45],
                data: countries.map((item) => item.count)
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