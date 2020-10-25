import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";

import styles from "./Country.module.css";

const Countries = ({ handleCountryChange, countryIn },) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);
    return (
        <form className={styles.formControl}>
            <select
                className={styles.dropDown}
                defaultValue=""
                onChange={(e) => handleCountryChange(e.target.value)}
            >
                <option value={countryIn}>{countryIn ? countryIn : "Global"}</option>
                {countries.map((country, i) => (
                    <option key={i} value={country}>
                        {country}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default Countries;
