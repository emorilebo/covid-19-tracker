import { FormControl, MenuItem } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Covid 19 Tracker</h1>
      <FormControl className='app__dropdown'>
        <Select
        variant='outlined'
        value='abc'
        >
        <MenuItem value='worldwide'>Worldwide</MenuItem>
        <MenuItem value='worldwide'>Worldwide</MenuItem>
        <MenuItem value='worldwide'>Worldwide</MenuItem>
        <MenuItem value='worldwide'>Worldwide</MenuItem>


        </Select>
      </FormControl>
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
