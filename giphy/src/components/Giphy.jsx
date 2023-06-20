import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
//import App from './App';

const Giphy = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("http://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "4GJnEl8NxQVfWloDgwlt3hcTtAANBgdg",
        },
      });

      console.log(results);
      setData(results.data.data);
    };
    fetchData();
  }, []);

  
  return data.map((el) => {
    return (
      <div className="gif">
        <img src={el.images.fixed_height.url} />
      </div>
    );
  });
};

export default Giphy;
//    const renderGifs=() => {
//         if (isLoading) {
//             return <div>Loading...</div>;
//         }
//         return data.map(el => {
//             return (
//                 <div className="gif">
//                     <img src={el.images.fixed_height.url} />
//                 </div>
//             );
//         });
//     }
