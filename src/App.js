import React from 'react';
import styles from './App.module.css';

import {Header, Cards, Chart, Country, Provinces, Footer} from './components';
import { fetchData, fetchDailyData, fetchProvinceData, fetchProvince } from './api'
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
    	const provinces = await fetchProvince(country);
    	const isLoading = false;
    	this.setState({ data, chartData, country: country, provinces, isLoading });
	}, 1200);
    
  }

  handleCountryChange =  (country) => {
	const isLoading = true;
	this.setState({ isLoading });
	setTimeout(async () => { 
		const data = await fetchData(country);
		const chartData = await fetchDailyData(country);
		const provinces = await fetchProvince(country);

		var provinceData = [];
		for(var i = 0; i < Object.values(provinces.province).length; i++){
			provinceData.push(await fetchProvinceData(country, Object.values(provinces.province)[i]));
		}

		const isLoading = false;
		this.setState({ data, chartData, country: country, provinceData, isLoading });
	}, 800);
  }
  
  render() {

    const { data, chartData, country, provinceData, isLoading } = this.state;

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
        		{(country === "" || country === undefined || provinceData[0].province === "mainland") ? "" : <Provinces provinces={provinceData} country={country}/>}
				<p className={styles.disclaimer}>* Realtime data from credible sources linked below. Actual numbers might take time to be reflected. </p>
			</div>
		)}
        <Footer/>
      </div>
    );
  }
}
export default App;
