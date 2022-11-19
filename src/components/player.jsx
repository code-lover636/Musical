import {useEffect, useRef} from 'react';

export function pauseAndPlay(nextmusic=false){
    const audio = document.querySelector('.audio')
    const pause = document.querySelectorAll('.pause-icon')[0]
    const play = document.querySelector('.play-icon')
    if(nextmusic){
        play.style.display = "none";
        pause.style.display = "block";
    }
    else if (audio.paused){
        audio.play();
        pause.style.display = "none";
        play.style.display = "block";
    }
    else{
        audio.pause();
        play.style.display = "none";
        pause.style.display = "block";
    }
    
}

function audioDetails(){
    const audio = document.querySelector('.audio')
    const duration = document.querySelector('.duration')
    const timeline = document.querySelector('.range')
    const currenttime = document.querySelector('.current-time')
    timeline.value = audio.currentTime*100/audio.duration;
    currenttime.innerHTML = `${parseInt(audio.currentTime / 60, 10)}:${parseInt(audio.currentTime % 60)}`;

    audio.addEventListener('loadedmetadata', (e) => {
        duration.innerHTML=`${parseInt(audio.duration / 60, 10)}:${parseInt(audio.duration % 60)}`;
      });

    audio.ontimeupdate = audioDetails;
    if (audio.currentTime===0){
        timeline.value=0;
    }
    function changeSeek () {
        const time = (timeline.value * audio.duration) / 100;
        audio.currentTime = time;
      }
    timeline.addEventListener('change', changeSeek);
}

  
export function MusicPlayer(props){
    const audioref = useRef();
    useEffect(() => {audioDetails();},[])
    return(
        <>
        <div className="player-bg">
            <div className="audio-wrapper">
                 <div className="details">
                    <img src={props.icon} alt="cover" className="icon" />
                    <p>{props.title}</p>
                </div>
                <div className="wrap-pause">
                    <svg onClick={()=>pauseAndPlay()} className="pause-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_37_2)">
                        <path d="M32.1601 16.08L8.94007 4.46999C8.62682 4.32486 8.28224 4.26038 7.93771 4.28242C7.59318 4.30447 7.25963 4.41233 6.96743 4.5962C6.67523 4.78007 6.43365 5.0341 6.2647 5.33517C6.09574 5.63624 6.00477 5.97479 6.00007 6.31999V29.53C5.99714 29.8843 6.08568 30.2335 6.25712 30.5436C6.42856 30.8537 6.6771 31.1144 6.97873 31.3004C7.28036 31.4864 7.62487 31.5915 7.97896 31.6054C8.33305 31.6193 8.68475 31.5417 9.00007 31.38L32.1601 19.77C32.5031 19.5978 32.7916 19.3336 32.9931 19.0069C33.1947 18.6802 33.3014 18.3039 33.3014 17.92C33.3014 17.5361 33.1947 17.1598 32.9931 16.8331C32.7916 16.5064 32.5031 16.2422 32.1601 16.07V16.08Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_37_2">
                        <rect width="36" height="36" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <svg onClick={()=>pauseAndPlay()} style={{display:"none"}} className="pause-icon play-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_59_2)">
                        <path d="M12.8802 4H6.0202C4.87697 4 3.9502 4.92677 3.9502 6.07V29.93C3.9502 31.0732 4.87697 32 6.0202 32H12.8802C14.0234 32 14.9502 31.0732 14.9502 29.93V6.07C14.9502 4.92677 14.0234 4 12.8802 4Z" fill="black"/>
                        <path d="M29.8802 4H23.0202C21.877 4 20.9502 4.92677 20.9502 6.07V29.93C20.9502 31.0732 21.877 32 23.0202 32H29.8802C31.0234 32 31.9502 31.0732 31.9502 29.93V6.07C31.9502 4.92677 31.0234 4 29.8802 4Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_59_2">
                        <rect width="36" height="36" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className="controls">
                    <audio ref={audioref} className="audio" src={props.audio}></audio>
                    <small className="current-time">0:00</small>
                    <input type="range" className="range"/>
                    <small className="duration"></small>
                </div>
            </div>
        </div>
        </>
    );
}
