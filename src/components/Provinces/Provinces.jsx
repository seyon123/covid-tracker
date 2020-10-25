import React from "react";

import styles from "./Provinces.module.css";

const Provinces = ({ provinces, country }) => {
    
    return (
        <div className={styles.container}>
            <table>
                <tbody>
                    <tr>
                        <th className={styles.left}>Regions:</th>
                        <th className={styles.right}>CASES</th>
                        <th className={styles.right}>RECOVERED</th>
                        <th className={styles.right}>DEATHS</th>
                    </tr>
                    { provinces.map((province, i) => (
                        <tr key={i}>
                            <td className={styles.left}>{province.province}</td>
                            <td className={styles.right}>{Object.values(province.cases)}</td>
                            <td className={styles.right}>{Object.values(province.recovered)}</td>
                            <td className={styles.right}>{Object.values(province.deaths)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Provinces;
