import React from 'react';
import styles from './App.module.css';

import {Header, Cards, Chart, Country, Footer} from './components';
import { fetchData } from './api'

class App extends React.Component {
  
  state = {
    data: {},
    country: '',
  }
  
  async componentDidMount(country) {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }
  
  render() {

    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Header/>
        <div className={styles.content}>
          <Country handleCountryChange={this.handleCountryChange} />
          <Cards data={data}/>
          <Chart data={data} country={country} />
        </div>
        <Footer/>
      </div>
    );
  }
}
export default App;
