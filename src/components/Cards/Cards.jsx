import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Cards = ({ data: { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths, updated } }) => {
    
    if (!cases) {
        return "Cant Find Data";
    }

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>Total Confirmed</h2>
                    <h3 className={styles.confirmed}>
                        <CountUp
                            start={0}
                            end={cases}
                            duration={2.0}
                            separator={","}
                        />
                    </h3>
                    <h4 className={styles.confirmed}>+{todayCases}</h4>
                </div>
                <div className={styles.card}>
                    <h2>Total Recovered</h2>
                    <h3 className={styles.recovered}>
                        <CountUp
                            start={0}
                            end={recovered}
                            duration={1.4}
                            separator={","}
                        />
                    </h3>
                    <h4 className={styles.recovered}>+{todayRecovered}</h4>
                </div>
                <div className={styles.card}>
                    <h2>Total Deaths</h2>
                    <h3 className={styles.deaths}>
                        <CountUp 
                            start={0}
                            end={deaths}
                            duration={1.0}
                            separator={","}
                        />
                    </h3>
                    <h4 className={styles.deaths}>+{todayDeaths}</h4>
                </div>
            </div>
            <h4 className={styles.updated} >Last Updated: {new Date(updated).toLocaleString()}</h4>
        </div>
    );
};

export default Cards;
