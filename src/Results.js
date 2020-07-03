import React from 'react';
function Results(props){
    const response = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016A000011124&topic=1&notes=0&stat=0');
    response.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));
    return(
        <div>
            <h1>{props.location.state.value}</h1>
        </div>
    );

}

export default Results;