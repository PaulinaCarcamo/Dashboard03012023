import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { fetchData } from "../api/api";

const BarChart = () => {

    const [mrfData, setMrfData] = useState([]);

    const fetchApi = async () => {
        const mrfData = await fetchData();
        setMrfData(mrfData);
        // console.log(mrfData);
   
        const findData = mrfData.Results.filter(element => element.Country === "GERMANY");
        console.log(findData);
        const findCount = findData.length;
        console.log(findCount);

    };

    useEffect(() => {
        fetchApi();
    }, []);

    //   const labels = ["January", "February", "March", "April", "May", "June"];
    const labels = mrfData.Results?.slice(0, 6).map((item) => { return item.Country });

    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [10, 5, 2, 20, 30, 45],
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