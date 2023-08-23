import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
// styling
import styled from "styled-components";
// styles
const StyledCalculatorContainer = styled.div `
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
const StyledTitle = styled.h2 `
    font-size: 33px;
    font-weight: 700;
`;
const Calculator = () => {
    // state for distance
    const [distance, setDistance] = useState(0);
    // state for efficiency
    const [fuelEfficiency, setFuelEfficiency] = useState(0);
    // state for footprint
    const [carbonFootprint, setCarbonFootprint] = useState(null);
    // carbon footprint calculator function
    const calculateCarbonFootprint = () => {
        // calculating the carbon footprint 
        const footprint = (distance / fuelEfficiency) * 2.3;
        setCarbonFootprint(footprint);
    };
    return (_jsxs(StyledCalculatorContainer, { children: [_jsx(StyledTitle, { children: "Carbon Footprint Calculator" }), _jsxs("div", { children: [_jsx("label", { children: "Distance(km):" }), _jsx("input", { type: "number", value: distance, onChange: (event) => setDistance(parseFloat(event.target.value)) })] }), _jsxs("div", { children: [_jsx("label", { children: "Fuel Efficiency(km/l):" }), _jsx("input", { type: "number", value: fuelEfficiency, onChange: (event) => setFuelEfficiency(parseFloat(event.target.value)) })] }), _jsx("button", { onClick: calculateCarbonFootprint, children: "Calculate" }), carbonFootprint !== null && (_jsxs("p", { children: ["Carbon Footprint: ", carbonFootprint.toFixed(2), "kg CO2"] }))] }));
};
export default Calculator;
