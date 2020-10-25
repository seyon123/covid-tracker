import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data: { cases, deaths, recovered }, country }) => {

    const lineChart = cases ? (
        <Line
            data={{
                labels: Object.keys(cases),
                datasets: [
                    {
                        data: Object.values(cases),
                        label: "Confirmed",
                        borderColor: "#3333FF",
                        fill: true,
						pointRadius: 1,
						pointHoverRadius: 5,
						
                    },
                    {
                        data: Object.values(recovered),
                        label: "Recovered",
                        borderColor: "green",
                        backgroundColor: "rgba(0,255,0,0.3)",
                        fill: true,
						pointRadius: 1,
						pointHoverRadius: 5,
					},
					{
                        data: Object.values(deaths),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255,0,0,0.5)",
                        fill: true,
						pointRadius: 1,
						pointHoverRadius: 5,
                    },
                ],
            }}
            options={{
                responsive: true,
                maintainAspectRatio: true,
				scales: {
					xAxes: [
					  {
						ticks: {
						  maxTicksLimit: 12,
						},
					  },
					],
				  },

            }}
        />
    ) : null;

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
};

export default Chart;
