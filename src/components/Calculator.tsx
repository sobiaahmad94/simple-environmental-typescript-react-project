import React, {useState} from "react";

const Calculator: React.FC = () => {
  // state for distance
  const [distance, setDistance] = useState<number>(0);
  // state for efficiency
  const [fuelEfficiency, setFuelEfficiency] = useState<number>(0);
  // state for footprint
  const [carbonFootprint, setCarbonFootprint] = useState<number | null>(null);

  // carbon footprint calculator function
  const calculateCarbonFootprint = () => {
    // calculating the carbon footprint 
    const footprint = (distance/fuelEfficiency) * 2.3;
    setCarbonFootprint(footprint);
  };

  return (
    <React.Fragment>
      <h2>Carbon Footprint Calculator</h2>
      <div>
        <label>Distance(km):</label>
        <input
          type="number"
          value={distance}
          onChange={(event) => setDistance(parseFloat(event.target.value))}
        />
      </div>
      <div>
        <label>Fuel Efficiency(km/l):</label>
        <input type="number" value={fuelEfficiency} 
        onChange={(event) => setFuelEfficiency(parseFloat(event.target.value))}/>
      </div>
      <button onClick={calculateCarbonFootprint}>Calculate</button>
      {carbonFootprint !== null && (
        <p>Carbon Footprint: {carbonFootprint.toFixed(2)}kg CO2</p>
      )}
    </React.Fragment>
  );
};

export default Calculator;
