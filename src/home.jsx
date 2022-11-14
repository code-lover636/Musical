import React from 'react';

function Home(){
    return(
        <>
        <section className="home-sec">
            <div className="welcome-msg">
                <h1><span>M</span>usical</h1>
                <p>Where  words  fail,  music  speak</p>
                <a href="/discover">Discover</a>
            </div>
            <img src="./assets/man.png" alt="man with headphones" />
        </section>
        
        </>
    );
}

export default Home;