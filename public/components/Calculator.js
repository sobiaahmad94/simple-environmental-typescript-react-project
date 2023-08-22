import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
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
    return (_jsxs(React.Fragment, { children: [_jsx("h2", { children: "Carbon Footprint Calculator" }), _jsxs("div", { children: [_jsx("label", { children: "Distance(km):" }), _jsx("input", { type: "number", value: distance, onChange: (event) => setDistance(parseFloat(event.target.value)) })] }), _jsxs("div", { children: [_jsx("label", { children: "Fuel Efficiency(km/l):" }), _jsx("input", { type: "number", value: fuelEfficiency, onChange: (event) => setFuelEfficiency(parseFloat(event.target.value)) })] }), _jsx("button", { onClick: calculateCarbonFootprint, children: "Calculate" }), carbonFootprint !== null && (_jsxs("p", { children: ["Carbon Footprint: ", carbonFootprint.toFixed(2), "kg CO2"] }))] }));
};
export default Calculator;
