import React, {useState} from "react";

// styling
import styled from "styled-components";

// styles
const StyledCalculatorContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Roboto:wght@300&display=swap');
    font-family: 'Abel', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    max-width: 400px;
    background-color: rgb(18, 161, 147);
    color: rgb(255, 255, 255);
    align-items: center;
    margin: 0 auto;
    padding: 50px;
    border 1px solid rgb(90, 90, 90);
    border-radius: 7px;
    box-shadow: 0 5px 9px rgb(0, 0, 0, 0.3);
`;

const StyledTitle = styled.h2`
    font-size: 33px;
    font-weight: 700;
`;



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
    <StyledCalculatorContainer>
      <StyledTitle>Carbon Footprint Calculator</StyledTitle>
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
    </StyledCalculatorContainer>
  );
};

export default Calculator;
