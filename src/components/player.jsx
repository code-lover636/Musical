import React from 'react';

function MusicPlayer(){
    return(
        <>
        <div className="player-bg">
            <div className="audio-wrapper">
                 <div className="details">
                    <img src="./assets/cover.png" alt="cover" className="icon" />
                    <p>Ophella Music Composed By Steven prince blah blah blah</p>
                </div>
                <div className="wrap-pause">
                    <svg className="pause-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_37_2)">
                        <path d="M32.1601 16.08L8.94007 4.46999C8.62682 4.32486 8.28224 4.26038 7.93771 4.28242C7.59318 4.30447 7.25963 4.41233 6.96743 4.5962C6.67523 4.78007 6.43365 5.0341 6.2647 5.33517C6.09574 5.63624 6.00477 5.97479 6.00007 6.31999V29.53C5.99714 29.8843 6.08568 30.2335 6.25712 30.5436C6.42856 30.8537 6.6771 31.1144 6.97873 31.3004C7.28036 31.4864 7.62487 31.5915 7.97896 31.6054C8.33305 31.6193 8.68475 31.5417 9.00007 31.38L32.1601 19.77C32.5031 19.5978 32.7916 19.3336 32.9931 19.0069C33.1947 18.6802 33.3014 18.3039 33.3014 17.92C33.3014 17.5361 33.1947 17.1598 32.9931 16.8331C32.7916 16.5064 32.5031 16.2422 32.1601 16.07V16.08Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_37_2">
                        <rect width="36" height="36" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="controls">
                    <small>1:23</small>
                    <input type="range" className="range" />
                    <small>10:23</small>
                </div>
            </div>
        </div>
        </>
    );
}

export default MusicPlayer;