import React from "react"


export default function Giphy() {
   
    function getGiphy() {
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
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}


// import React from "react"

// export default function Header() {
//     return (
//         <header className="header">
//             <img 
//                 src="./images/troll-face.png" 
//                 className="header--image"
//             />
//             <h2 className="header--title">Meme Generator</h2>
//             <h4 className="header--project">React Course - Project 3</h4>
//         </header>
//     )
// }