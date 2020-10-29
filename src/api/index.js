import axios from "axios";

const api = "https://disease.sh/v3/covid-19";

export const fetchData = async (country) => {
    let changeableUrl = `${api}/all`;

    if (country) {
        changeableUrl = `${api}/countries/${country}?strict=false`;
    }

    try {
        const {
            data: { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths, active, critical, tests, updated },
        } = await axios.get(changeableUrl);
        return { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths, active, critical, tests, updated };
        
    } catch (error) {
        return error;
    }
};


const buildChartData = (data) => {
    let chartData = {};
    let lastDataPoint;
    for (let date in data) {
      if (lastDataPoint) {
        chartData[date] = (data[date] - lastDataPoint);
      }
      lastDataPoint = data[date];
    }
    return chartData;
  };

export const fetchDailyData = async (country) => {
    
    let url1 = `${api}/historical/all?lastdays=120`;
    let url2 = `${api}/historical/${country}?lastdays=120`;
    
    try {

        if (country) {
            const{
                data: {timeline: {cases, deaths, recovered}},
            } = await axios.get(url2);
            let cases2 = buildChartData(cases);
            let deaths2 = buildChartData(deaths);
            let recovered2 = buildChartData(recovered);
            return {cases, deaths, recovered, cases2, deaths2, recovered2}
        }else {
            const{ 
                data: {cases, deaths, recovered},
            } = await axios.get(url1);
            let cases2 = buildChartData(cases);
            let deaths2 = buildChartData(deaths);
            let recovered2 = buildChartData(recovered);
            return {cases, deaths, recovered, cases2, deaths2, recovered2}
        }
        
    } catch (error) {
        return error;
    }
};


export const fetchRegionData = async (countryIn) => {
    let url = `${api}/jhucsse`;

    try {
        const{data} = await axios.get(url);
        return data.filter(
            function (region) {
                return region.country === countryIn;
            }).map(({country, stats: {confirmed, deaths, recovered}, province}) => ({country, province, confirmed, deaths, recovered}));
    } catch (error) {
        return error;
    }
}


export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(
            `${api}/jhucsse`
        );
        return [...new Set(data.map((country,) => (country.country)))];
    } catch (error) {
        return error;
    }
};