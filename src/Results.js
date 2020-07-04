import React, { Component, useState, useEffect } from 'react';
import { Redirect, Route, HashRouter, NavLink } from 'react-router-dom';

function Results(props){
    
    useEffect (() => {
        fetchItems();
    }, [])

    /*var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
    fetch(proxyUrl + targetUrl)
    .then(blob => blob.json())
    .then(data => {
    console.table(data);
    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    return data;
    }).catch(e => {console.log(e); return e;});
    <pre></pre>*/

    
    const fetchItems = async() => {
        const data = await fetch("https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016A000011124&topic=1&notes=0&stat=0");
        const data2 = await data.json();

        console.log(data2);
    }

    return(
        <div>
            <h1>{props.location.state.value}</h1>
        </div>
    );

}

export default Results;