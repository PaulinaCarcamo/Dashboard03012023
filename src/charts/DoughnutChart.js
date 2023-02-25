import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { fetchData } from "../api/api.js";
import { chartsDesc } from "../data/chartsDesc.js";
import { Container } from "react-bootstrap";

const DoughnutChart = () => {

    const [mrfData, setMrfData] = useState([]);
    const [countries, setCountries] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        setMrfData(mrfData);
        // console.log(mrfData);

        const Countries = mrfData.Results
            .map(dataItem => dataItem.Country) // get all types
            .filter((type, index, array) => array.indexOf(type) === index); // filter out duplicates

        const counts = Countries
            .map(type => ({
                type: type,
                count: mrfData.Results.filter(item => item.Country === type).length
            }));

        setCountries(counts);
        // console.log(counts);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    //   const labels = ["GERMANY", "February", "March", "April", "May", "June"];
    // const labels = mrfData.Results?.slice(0, 6).map((item) => { return item.Country });
    const labels = countries.map((item) => item.type)
    const title = chartsDesc.map((item) => item.title)
    // console.log(title[0]);

    const data = {
        labels: labels,
        datasets: [
            {
                // label: title[0],
                backgroundColor: ["#8cbeb2", "#8c98be", "#be8c98", "#beb28c", "#f2ebbf", "#e0f2bf", "#c6f2bf", "#bfc6f2", "#ebbff2", "#f9bfbf", "#f5c481"],
                borderColor: "white",
                data: countries.map((item) => item.count),

            },
        ],
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Doughnut Chart'
                }
            }
        },
    };

    return (
        <div>
            <Container style={{ maxHeight: '70vh' }}>
                <Doughnut data={data} />
            </Container>
        </div>
    );
};

export default DoughnutChart;