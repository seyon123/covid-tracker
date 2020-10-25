import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Cards = ({ data: { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths, active, critical, tests, updated } }) => {
    
    if (!cases) {
        return "Cant Find Data";
    }

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>Total Confirmed</h2>
                    <h3 className={styles.confirmed}>
                    {(cases !== 0) ? <CountUp 
                            start={0}
                            end={cases}
                            duration={1.0}
                            separator={","}
                        /> : "N.A"}
                    </h3>
                    <h4 className={styles.confirmed}>+{todayCases}</h4>
                </div>
                <div className={styles.card}>
                    <h2>Total Recovered</h2>
                    <h3 className={styles.recovered}>
                    {(recovered !== 0) ? <CountUp 
                            start={0}
                            end={recovered}
                            duration={1.0}
                            separator={","}
                        /> : "N.A"}
                    </h3>
                    <h4 className={styles.recovered}>+{todayRecovered}</h4>
                </div>
                <div className={styles.card}>
                    <h2>Total Deaths</h2>
                    <h3 className={styles.deaths}>
                    {(deaths !== 0) ? <CountUp 
                            start={0}
                            end={deaths}
                            duration={1.0}
                            separator={","}
                        /> : "N.A"}
                    </h3>
                    <h4 className={styles.deaths}>+{todayDeaths}</h4>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>Total Tests Conducted</h2>
                    <h3>
                    {(tests !== 0) ? <CountUp 
                            start={0}
                            end={tests}
                            duration={1.0}
                            separator={","}
                        /> : "N.A"}
                    </h3>
                </div>
                <div className={styles.card}>
                    <h2>Active Cases </h2>
                    <h3 className={styles.confirmed}>
                    {(active !== 0) ? <CountUp 
                            start={0}
                            end={active}
                            duration={1.0}
                            separator={","}
                        /> : "N.A"}
                    </h3>
                </div>
                <div className={styles.card}>
                    <h2>Critical Cases</h2>
                    <h3 className={styles.deaths}>
                    {(critical !== 0) ? <CountUp 
                            start={0}
                            end={critical}
                            duration={1.0}
                            separator={","}
                        /> : "N.A"}
                        
                    </h3>
                </div>
            </div>
            <h4 className={styles.updated} >Last Updated: {new Date(updated).toLocaleString()}</h4>
        </div>
    );
};

export default Cards;
