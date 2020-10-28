import React from 'react';
import styles from './App.module.css';

import {Header, Cards, Chart, Country, Provinces, Footer} from './components';
import { fetchData, fetchDailyData, fetchRegionData } from './api'
import ReactLoading from 'react-loading';

class App extends React.Component {
  
  state = {
    data: {},
    chartData: {},
    country: '',
    provinceData: {},
    isLoading: true
  }
  
  async componentDidMount(country) {

	const btnToggle = document.querySelector("#modeToggle i");
	const theme = localStorage.getItem("theme");

	if (theme === "light") {
        btnToggle.classList.add("fa-sun");
        btnToggle.style.padding = "4px 3.8px";
        btnToggle.classList.remove("fa-moon");
        document.querySelector("body").classList.add(theme);
	}
	
	btnToggle.addEventListener("click", () => {
		if (btnToggle.classList.contains("fa-moon")) {
			btnToggle.classList.add("fa-sun");
			btnToggle.style.padding = "4px 3.8px";
			btnToggle.classList.remove("fa-moon");
			localStorage.setItem("theme", "light");
		} else {
			btnToggle.classList.add("fa-moon");
			btnToggle.classList.remove("fa-sun");
			btnToggle.style.padding = "4px 5px";
			localStorage.clear();
		}
		document.querySelector("body").classList.toggle("light");		
	});

	setTimeout(async () => { 
		const data = await fetchData(country);
    	const chartData = await fetchDailyData(country);
    	const regions = await fetchRegionData(country);
    	const isLoading = false;
    	this.setState({ data, chartData, country: country, regions, isLoading });
	}, 0);
    
  }

  handleCountryChange =  (country) => {
	const isLoading = true;
	this.setState({ isLoading });
	setTimeout(async () => { 
		const data = await fetchData(country);
		const chartData = await fetchDailyData(country);
		const regions = await fetchRegionData(country);
		const isLoading = false;
		this.setState({ data, chartData, country: country, regions, isLoading });
	}, 0);
  }

  handleRegionChange =  (country, search) => {
	setTimeout(async () => { 
		const regions1 = await fetchRegionData(country);
		var regions = regions1.filter(
			function (region) {
				return (region.province).toLowerCase().includes(search.toLowerCase());
			}
		);
		console.log(regions);
		if (regions.length === 0){
			regions = [{confirmed: "No Data", country: country, deaths: "No Data", province: "No Data", recovered: "No Data"}]
		}
		this.setState({ regions });
	}, 0);
  }
  
  render() {

    const { data, chartData, country, regions, isLoading } = this.state;

    return (
      <div className={styles.container}>
        <Header/>
        {isLoading ? (
			<div className={styles.content}>
        		<ReactLoading type={"spin"} color={"grey"} height={'100px'} width={'100px'} />
			</div>
        ): (
			<div className={styles.content}>
        		<Country handleCountryChange={this.handleCountryChange} countryIn= {country} />
        		<Cards data={data}/>
        		<Chart data={chartData} country={country} />
        		{(country === "" || country === undefined || regions.length === 0 || Object.values(regions)[0].province === null) ? "" : <Provinces handleRegionChange={this.handleRegionChange} provinces={regions}/>}
				<p className={styles.disclaimer}>* Realtime data from credible sources linked below. Actual numbers might take time to be reflected. </p>
			</div>
		)}
        <Footer/>
      </div>
    );
  }
}
export default App;
