import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
        <section className="home-sec">
            <div className="welcome-msg">
                <h1><span>M</span>usical</h1>
                <p>Where  words  fail,  music  speak</p>
                <Link className="a" to="/discover">
                    Discover
                </Link>  
            </div>
            <img src="./assets/man.png" alt="man with headphones" />
        </section>
        
        </>
    );
}

export default Home;