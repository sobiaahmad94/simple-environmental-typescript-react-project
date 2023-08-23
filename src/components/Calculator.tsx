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

const StyledLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 3px solid rgb(199, 104, 69)
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background-color: rgb(238, 134, 97);
  color: rgb(255, 255, 255);
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: rgb(69, 240, 131);
  }
`;

const StyledOutput = styled.p`
    color: rgb(69, 240, 131);
    font-size: 28px;
    font-weight: bolder;
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
        <StyledLabel>Distance(km):</StyledLabel>
        <StyledInput
          type="number"
          value={distance}
          onChange={(event) => setDistance(parseFloat(event.target.value))}
        />
      </div>
      <div>
        <StyledLabel>Fuel Efficiency(km/l):</StyledLabel>
        <StyledInput type="number" value={fuelEfficiency} 
        onChange={(event) => setFuelEfficiency(parseFloat(event.target.value))}/>
      </div>
      <StyledButton onClick={calculateCarbonFootprint}>Calculate</StyledButton>
      {carbonFootprint !== null && (
        <StyledOutput>Carbon Footprint: {carbonFootprint.toFixed(2)}kg CO2</StyledOutput>
      )}
    </StyledCalculatorContainer>
  );
};

export default Calculator;
