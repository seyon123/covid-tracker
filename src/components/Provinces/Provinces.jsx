import React from "react";

import styles from "./Provinces.module.css";

const Provinces = ({ provinces, handleRegionChange }) => {
    
    return (
        <div className={styles.container}>
            <input onChange={(e) => handleRegionChange(provinces[0].country, e.target.value)} className={styles.searchbox} type="text" placeholder="Search for a region..."></input>
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
                            <td className={styles.right}>{province.confirmed}</td>
                            <td className={styles.right}>{province.recovered}</td>
                            <td className={styles.right}>{province.deaths}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Provinces;
