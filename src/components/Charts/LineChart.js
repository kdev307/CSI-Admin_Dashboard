import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            label: "Sales",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
    ],
};

const LineChart = () => {
    return <Line data={data} />;
};

export default LineChart;
