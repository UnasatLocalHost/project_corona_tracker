import React from "react";
import NavBar from "./components/NavBar/Index";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";
import image from "./images/image.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dispensatie from "./Pages/Dispensatie";
import Registratie from "./Pages/Registratie";
import Contact from "./Pages/PageForm/Contact";
import Nieuws from "./Pages/Nieuws";
import Fill from "./Pages/Fill";


class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>


      
        <Router>
          <NavBar />
          <Switch>
            {/* <Route path ="/dispensatie"  Component ={Dispensatie}/> */}
            <Route exact path="/">
              <img className={styles.image} src={image} alt="COVID-19" />
              <Cards data={data} />
              <CountryPicker handleCountryChange={this.handleCountryChange} />
              <Chart data={data} country={country} />
            </Route>

            <Route path="/dispensatie">
              <Dispensatie />
            </Route>
            <Route path="/registratie">
              <Registratie />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/nieuws">
              <Nieuws />
            </Route>
            <Route path="/fill">
              <Fill/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
