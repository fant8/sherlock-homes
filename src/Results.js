import React, { Component, useState } from 'react';
import { Redirect, Route, HashRouter, NavLink } from 'react-router-dom';

function Results(props){

    
    return(
        <h1>{props.location.state.value}</h1>
    );

}

export default Results;