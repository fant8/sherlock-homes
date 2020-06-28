import React, { Component, useState } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch, HashRouter, NavLink, Link, useHistory } from 'react-router-dom';
import './App.css';
import logo from './unnamed.png';
import Checkbox from './Checkbox';
import Range from './Range';
import { Button } from 'react-bootstrap';

function App() {
  const history = useHistory();
  const [isEmpty, setEmpty] = useState("");

  var selectedCheckboxes = new Set();
  var importances = new Map();

  const toggleCheckbox = label => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
    console.log(selectedCheckboxes);
  }

  const handleSubmit = (e) => {
    if (selectedCheckboxes.size === 0){
      setEmpty("Please select a checkbox.");
    }else{
      history.push({pathname:"/results", state: { value: "test", checkboxes: selectedCheckboxes, ranges: importances}});
    }
  }


  const addRange = (label, value) => {
    importances.set(label, value);
    console.log(importances);
  }

  return (
    <div id="outer">
      
      <h1>Sherlock Homes</h1>
      <h5>Let us help you find a new Canadian city to call home.</h5>
      <center><img className="img" src={logo} alt="logo"/></center>

      <div id="inner">
        
        <h2>Refine</h2><br></br>
        <h3>Population</h3>

        <Checkbox label="Large Population" handleCheckboxChange={toggleCheckbox} key="largePop" />

        <Checkbox label="Medium Population" handleCheckboxChange={toggleCheckbox} key="medPop" />

        <Checkbox label="Small Population" handleCheckboxChange={toggleCheckbox} key="smallPop" />
        <br></br>

        <Range label="popRange" handleRangeChange={addRange} />
        <br></br><br></br>
        
        <h3>Crime Rate</h3>
        <Range label="crimeRange" handleRangeChange={addRange} />
        <br></br><br></br>

        <h3>Cost of Living Index</h3>

        <Checkbox label="> 7.0" handleCheckboxChange={toggleCheckbox} key="largeCost" />

        <Checkbox label="7.0 - 6.0" handleCheckboxChange={toggleCheckbox} key="medCost" />

        <Checkbox label="< 6.0" handleCheckboxChange={toggleCheckbox} key="smallCost" />
        <br></br>
        <Range label="costRange" handleRangeChange={addRange} />
        <br></br><br></br>

        <h3>Ethnic Groups</h3>

        <Checkbox label="East Asian" handleCheckboxChange={toggleCheckbox} key="eastAsian" />

        <Checkbox label="South East Asian" handleCheckboxChange={toggleCheckbox} key="southEastAsian" />

        <Checkbox label="African" handleCheckboxChange={toggleCheckbox} key="african" />

        <Checkbox label="Latino/Hispanic" handleCheckboxChange={toggleCheckbox} key="latin" />

        <Checkbox label="Native American" handleCheckboxChange={toggleCheckbox} key="nativeAmerican" />
        <br></br>

        <Range label="ethnicityRange" handleRangeChange={addRange} />
         
        <br></br>
        <br></br>

        <Button className="button" onClick={handleSubmit}>Submit</Button>

        <p>{isEmpty}</p>
      </div>
    </div>
  );
}

export default App;
