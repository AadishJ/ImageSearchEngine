import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
function App ()
{ 
    let [images,setImages] =useState([])
    let handleSubmit= async (term) => 
    {
        let result = await searchImage( term );
        setImages( result );
    }
    return (
        <div>
            <SearchBar submit={ handleSubmit } />
            <ImageList images={images} />
        </div>
    );
}

export default App;