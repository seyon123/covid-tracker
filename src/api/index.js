import axios from "axios";

const api = "https://disease.sh/v3/covid-19";

export const fetchData = async (country) => {
    let changeableUrl = `${api}/all`;

    if (country) {
        changeableUrl = `${api}/countries/${country}?strict=false`;
    }

    try {
        const {
            data: { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths, updated },
        } = await axios.get(changeableUrl);
        //console.log( { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths, updated });
        return { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths, updated };
        
    } catch (error) {
        return error;
    }
};


export const fetchDailyData = async (country) => {
    
    let url1 = `${api}/historical/all?lastdays=all`;
    let url2 = `${api}/historical/${country}?lastdays=all`;
    
    try {

        if (country) {
            const{
                data: {timeline: {cases, deaths, recovered}},
            } = await axios.get(url2);
            return {cases, deaths, recovered}
        }else{
            const{ 
                data: {cases, deaths, recovered},
            } = await axios.get(url1);
            return {cases, deaths, recovered}
        }
        //console.log({cases, deaths, recovered});
        
    } catch (error) {
        return error;
    }
};



export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(
            "https://disease.sh/v3/covid-19/historical?lastdays=1"
        );
        return [...new Set(data.map((country,) => (country.country)))];
    } catch (error) {
        return error;
    }
};


// export const fetchCountries = async () => {
//     try {
//         const {
//             data: { countries },
//         } = await axios.get(`${api}/countries`);
//         console.log(countries.map((country) => country.name));
//         return countries.map((country) => country.name);
//     } catch (error) {
//         return error;
//     }
// };
