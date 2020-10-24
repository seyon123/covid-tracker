import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-zoom";

import styles from "./Chart.module.css";

const Chart = ({ data: { cases, deaths, recovered }, country }) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData(country);
            setDailyData(initialDailyData);
        };
        fetchAPI();
    });

    //console.log(dailyData);

    // const barChart = (
    //   cases ? (
    //       <Bar
    //         data={{
    //           labels: ['Confirmed', 'Recovered', 'Deaths'],
    //           datasets: [
    //             {
    //               label: 'People',
    //               backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
    //               data: [cases, recovered, deaths],
    //             },
    //           ],
    //         }}
    //         options={{
    //           legend: { display: false },
    //           title: { display: true, text: `Current state in ${country}` },
    //         }}
    //       />
    //     ) : null
    //   );
    //console.log(dailyData);
    // console.log(Object.keys(dailyData.cases).map(function(date1,index) {date1 = new Date(date1).toLocaleDateString}));
    const lineChart = Object.keys(dailyData)[0] ? (
        <Line
            data={{
                labels: Object.keys(dailyData.cases),
                datasets: [
                    {
                        data: Object.values(dailyData.cases),
                        label: "Confirmed",
                        borderColor: "#3333FF",
                        fill: true,
						pointRadius: 1,
						pointHoverRadius: 5,
						
                    },
                    {
                        data: Object.values(dailyData.recovered),
                        label: "Recovered",
                        borderColor: "green",
                        backgroundColor: "rgba(0,255,0,0.3)",
                        fill: true,
						pointRadius: 1,
						pointHoverRadius: 5,
					},
					{
                        data: Object.values(dailyData.deaths),
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
						// type: 'time',
						// time: {
						//   unit: 'day',
						//   tooltipFormat: 'lll',
						// },
						ticks: {
						  maxTicksLimit: 12,
						},
					  },
					],
				  },

            }}
        />
    ) : null;

    return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
