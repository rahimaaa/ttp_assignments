import React, {useEffect, useState} from "react";
import axios from "axios";
// import App from './App';


const Giphy =() => {
    const[data, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async() => {
            const results = await  axios("http://api.giphy.com/v1/gifs/trending", {
            params: {
                api_key: "4GJnEl8NxQVfWloDgwlt3hcTtAANBgdg"
            }
        });
        console.log(results);
        setData(results.data.data);
        }
        fetchData();
    },[] );

  

    // const renderGifs = () => {
    //     return data.map( el => {
    //         return(
    //             <div className = "gif">
    //                 <img src={el.images.fixed_height.url}/>
    //             </div>
    //         )
    //     });
    // };
    // console.log(renderGifs)

    return data.map( el => {
        return(
            <div className = "gif">
                <img src={el.images.fixed_height.url}/>
            </div>
        )
    });
   
};

export default Giphy;
