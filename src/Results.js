import React from 'react';

function Results(props){

    const barrie = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503568&topic=0&notes=0&stat=0');
    barrie.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));
   
    const belleville = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503522&topic=0&notes=0&stat=0');
    belleville.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));
    
    const brantford = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503543&topic=0&notes=0&stat=0');
    brantford.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const centre_wellington = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504531&topic=0&notes=0&stat=0');
    centre_wellington.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const chatham_kent = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504556&topic=0&notes=0&stat=0');
    chatham_kent.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const cobourg = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504527&topic=0&notes=0&stat=0');
    cobourg.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const collingwood = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504567&topic=0&notes=0&stat=0');
    collingwood.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const cornwall = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504501&topic=0&notes=0&stat=0');
    cornwall.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const sudbury = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503580&topic=0&notes=0&stat=0');
    sudbury.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));
   
    const guelph = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503550&topic=0&notes=0&stat=0');
    guelph.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const hamilton = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503537&topic=0&notes=0&stat=0');
    hamilton.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const kawartha_lakes = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504530&topic=0&notes=0&stat=0');
    kawartha_lakes.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const kingston = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503521&topic=0&notes=0&stat=0');
    kingston.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const kitchener = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503541&topic=0&notes=0&stat=0');
    kitchener.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const leamington = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504557&topic=0&notes=0&stat=0');
    leamington.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const london = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503555&topic=0&notes=0&stat=0');
    london.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const norfolk = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504547&topic=0&notes=0&stat=0');
    norfolk.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const north_bay = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504575&topic=0&notes=0&stat=0');
    north_bay.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const orilla = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504569&topic=0&notes=0&stat=0');
    orilla.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const oshawa = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503532&topic=0&notes=0&stat=0');
    oshawa.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const ottawa = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503505&topic=0&notes=0&stat=0');
    ottawa.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const owen_sound = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504566&topic=0&notes=0&stat=0');
    owen_sound.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const peterborough = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503529&topic=0&notes=0&stat=0');
    peterborough.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const sarnia = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504562&topic=0&notes=0&stat=0');
    sarnia.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const st_catherines = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503539&topic=0&notes=0&stat=0');
    st_catherines.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const stratford = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504553&topic=0&notes=0&stat=0');
    stratford.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const thunder_bay = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503595&topic=0&notes=0&stat=0');
    thunder_bay.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const timmins = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504586&topic=0&notes=0&stat=0');
    timmins.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const toronto = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503535&topic=0&notes=0&stat=0');
    toronto.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const wasaga_beach = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504565&topic=0&notes=0&stat=0');
    wasaga_beach.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const windsor = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0503559&topic=0&notes=0&stat=0');
    windsor.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    const woodstock = fetch('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid=2016S0504544&topic=0&notes=0&stat=0');
    woodstock.then(res => res.text()).then(res => console.log(JSON.parse(res.substring(2)))).catch(rej => console.log(rej));

    return(
        <div>
            <h1>{props.location.state.value}</h1>
        </div>
    );

}

export default Results;