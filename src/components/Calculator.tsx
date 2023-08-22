import React, {useState} from "react";

const Calculator: React.FC = () => {
    // state for distance
    const [distance, setDistance] = useState<number>(0);
    // state for efficiency
    const [fuelEfficiency, setFuelEfficiency] = useState<number>(0);
    // state for footprint
    const [carbonFootprint, setCarbonFootprint] = useState<number | null>(null);

    // carbon footprint calculator func
    const calculatorCarbonFootprint = () => {
        const footprint = (distance/fuelEfficiency) * 2.3
        setCarbonFootprint(footprint);
    };

    return (
      <>
      <h2>Carbon Footprint Calculator</h2>
      <div>
        <label>Distance (km):</label>
        <input type="number" value={distance} onChange={(e) => setDistance(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Fuel Efficiency (km/l):</label>
        <input type="number" value={fuelEfficiency} onChange={(e) => setFuelEfficiency(parseFloat(e.target.value))} />
      </div>
      <button onClick={calculatorCarbonFootprint}>Calculate</button>
      {carbonFootprint !== null && <p>Carbon Footprint: {carbonFootprint.toFixed(2)} kg CO2</p>}
    </>
  );
};

export default Calculator;