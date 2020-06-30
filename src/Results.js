import React, { Component, useState, useEffect } from 'react';
import { Redirect, Route, HashRouter, NavLink } from 'react-router-dom';

function Results(props){
    useEffect (() => {
        fetchItems();
    }, [])
    
    const fetchItems = async() => {
        const data = await fetch("https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016A000011124&topic=0&notes=0&stat=0");
        console.log(data);
    }

    return(
        <div>
            <h1>{props.location.state.value}</h1>
        </div>
    );

}

export default Results;