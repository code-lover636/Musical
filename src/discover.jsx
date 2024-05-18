import {useState,useEffect} from 'react';
import Card from './components/card';
import {MusicPlayer,pauseAndPlay} from './components/player';
import {Link} from 'react-router-dom';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '15a2a9dc5bmsh020a3872b83c185p10621ejsnd08f0392c827',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};



function Discover(){

    // async function Popular(){
    //     fetch('https://shazam-core.p.rapidapi.com/v1/charts/get-top-songs-in-world', options)
    //                             .then(response => {
    //                                 const data = response.json();
    //                                 const sug_list = [];
    //                                 for (let i = 0; i<data.length; i++)
    //                                     sug_list.push(data[i]);
     
    //                                 setMusic(sug_list);
    //                                 setNowPlaying([sug_list[0]["images"]["coverart"],sug_list[0]["title"],sug_list[0]["hub"]["actions"][1]["uri"],sug_list[0]["artists"][0]["alias"]]);
    //                             })
    //                             .catch(err => console.error(">>"+err));
    // }

    async function searchMusic(query){
        const url = 'https://shazam-core.p.rapidapi.com/v1/search/multi?';
        const response = await fetch(url+`query=${query}&search_type=SONGS_ARTISTS`, options)
                                .then(response => response.json())
                                .catch(err => console.error(err));
        const data = response["tracks"]["hits"];
        console.log(query);
        const ans_list = [];
        for (let i = 0; i<data.length; i++){
            ans_list.push(data[i]["track"]);
        };     
        setMusic(ans_list);
        setNowPlaying([ans_list[0]["images"]["coverart"], ans_list[0]["title"]]);
    }

    const [music, setMusic] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {searchMusic("Metal")},[]);
    
    return(
        <>
        <section className="discover-sec">
            <div className="wrapper">
            <header>
                <h1 className="discover-heading">Discover</h1>
                <div className="search-box">
                    <input onChange={e=>{setSearchTerm(e.target.value);}} type="text" className="search-input" placeholder="Search..."/>
                    <svg onClick={()=>{searchMusic(searchTerm);}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9399 18.5624L13.4474 12.0699C14.4549 10.7675 14.9999 9.17496 14.9999 7.49997C14.9999 5.49498 14.2174 3.61498 12.8024 2.19749C11.3874 0.779996 9.50246 0 7.49997 0C5.49748 0 3.61248 0.782496 2.19749 2.19749C0.779996 3.61248 0 5.49498 0 7.49997C0 9.50246 0.782496 11.3874 2.19749 12.8024C3.61248 14.2199 5.49498 14.9999 7.49997 14.9999C9.17496 14.9999 10.765 14.4549 12.0674 13.4499L18.5599 19.9399C18.579 19.959 18.6016 19.9741 18.6264 19.9844C18.6513 19.9947 18.678 20 18.7049 20C18.7318 20 18.7585 19.9947 18.7834 19.9844C18.8083 19.9741 18.8309 19.959 18.8499 19.9399L19.9399 18.8524C19.959 18.8334 19.9741 18.8108 19.9844 18.7859C19.9947 18.761 20 18.7343 20 18.7074C20 18.6805 19.9947 18.6538 19.9844 18.6289C19.9741 18.6041 19.959 18.5815 19.9399 18.5624ZM11.46 11.46C10.4 12.5174 8.99496 13.0999 7.49997 13.0999C6.00497 13.0999 4.59998 12.5174 3.53998 11.46C2.48249 10.4 1.89999 8.99496 1.89999 7.49997C1.89999 6.00497 2.48249 4.59748 3.53998 3.53998C4.59998 2.48249 6.00497 1.89999 7.49997 1.89999C8.99496 1.89999 10.4025 2.47999 11.46 3.53998C12.5174 4.59998 13.0999 6.00497 13.0999 7.49997C13.0999 8.99496 12.5174 10.4025 11.46 11.46Z" fill="white"/>
                    </svg>
                </div>
                <Link to="/" className="a">
                    <p className="logo"><span>M</span>usical</p>
                </Link>  
                
            </header>
            <div className="display-container">
            <div className="displays">
                {music.length>0 ? music.slice(0,5).map(item => <Card func={()=> {
                    setNowPlaying([item["images"]["coverart"],item["title"],item["hub"]["actions"][1]["uri"],item["artists"][0]["alias"]]);
                    pauseAndPlay(true);
                    }
                } cover={item}/>): <Card cover=""/> }
            </div>
            </div>
            <section className="discover-sug">
                <div className="popular">
                    <h1 className="popular-heading"><span>{searchTerm===""?"Metal":""}</span></h1>
                    <ol>
                        {music.length>0 ? music.slice(5).map(item => {
                            return(
                                <li onClick={() =>{
                                    setNowPlaying([item["images"]["coverart"],item["title"],item["hub"]["actions"][1]["uri"],item["artists"][0]["alias"]]);
                                    pauseAndPlay(true);
                                }}>
                                    <span className="song-name">{item["title"]}</span>
                                    <span className="artist-name">{item["artists"][0]["alias"]}</span>
                                </li>
                            );
                        }):""}
                    </ol>
                </div>
                <div className="artist">
                    <h1 className="heading">Now <span>Playing</span></h1>
                    <img src={music.length>0 ? nowPlaying[0]: ""} alt="cover" />
                    <h2 className="song-name">{music.length>0 ? nowPlaying[1]: ""}</h2>
                    {/* <h2 className="artist-name">{music.length>0 ? nowPlaying[3]:""}</h2> */}
                </div>
            </section>
            <MusicPlayer music={music} icon={music.length>0 ? nowPlaying[0]: ""} title={music.length>0 ? nowPlaying[1]: ""} audio={music.length>0 ? nowPlaying[2]: ""}/>
            </div>
        </section>
        </>
    );
}

export default Discover;
