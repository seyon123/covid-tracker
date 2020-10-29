import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data: { cases, deaths, recovered, cases2, deaths2, recovered2 }, country }) => {

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
            height={500}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    mode: "index",
                    intersect: true,
                },
                title: {
                    display: true,
                    text: "Total cases in the past 120 days",
                },
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
    const lineChart2 = cases2 ? (
        <Line
            data={{
                labels: Object.keys(cases2),
                datasets: [
                    {
                        data: Object.values(cases2),
                        label: "Daily Confirmed",
                        borderColor: "#3333FF",
                        fill: true,
						pointRadius: 1,
						pointHoverRadius: 5,
						
                    },
                    {
                        data: Object.values(recovered2),
                        label: "Daily Recovered",
                        borderColor: "green",
                        backgroundColor: "rgba(0,255,0,0.3)",
                        fill: true,
						pointRadius: 1,
						pointHoverRadius: 5,
					},
					{
                        data: Object.values(deaths2),
                        label: "Daily Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255,0,0,0.5)",
                        fill: true,
						pointRadius: 1,
						pointHoverRadius: 5,
                    },
                ],
            }}
            height={500}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    mode: "index",
                    intersect: true,
                },
                title: {
                    display: true,
                    text: "Daily cases in the past 120 days",
                },
            }}
        />
    ) : null;

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                {lineChart}
            </div>
            <div className={styles.container}>
                {lineChart2}
        </div>
        </div>
        
    );
};

export default Chart;
