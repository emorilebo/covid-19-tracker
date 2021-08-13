import { FormControl, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  //https://disease.sh/v3/covid-19/countries

  //USEEFFECT: Runs a piece of code based on a given condition

  useEffect(
    () => {
      //async
      const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
          .then((response) => response.json())
          .then((data) => {
            const countries = data.map((country) => ({
              name: country.country,
              value: country.countryInfo.iso2,
            }));
            setCountries(countries);
          });
      };
      getCountriesData();
    },
    [
      //If blank, the code on top will run once when the component loads and not again
    ]
  );

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries and show a drop doen list of the options */}

            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Tables */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
