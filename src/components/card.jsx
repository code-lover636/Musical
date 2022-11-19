import React from 'react';

function Card(props){
    return(
        <>
        <div className="cover-border" onClick={() => {props.func();}} >
            <img className="card-img" src={props.cover!==""? props.cover["images"]["coverart"]:""} alt="cover-img" />
        </div>
        </>
    );
}

export default Card;