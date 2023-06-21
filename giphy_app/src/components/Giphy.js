import React from "react"


export default function Giphy() {
   
    function getGif() {
        // const memesArray = memesData.data.memes
        // const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomNumber].url
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
               
                <button 
                    className="form--button"
                    onClick={getGif}
                >
                    Get a new gif
                </button>
            </div>
        </main>
    )
}

