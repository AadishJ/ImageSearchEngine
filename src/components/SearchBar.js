import { useState } from "react";
import "./SearchBar.css";

function SearchBar ({submit})
{
    let [ term, setTerm ] = useState( "" );
    let handleChange = (event) =>
    {
        setTerm( event.target.value );
    }
    let handleSubmit = (event) =>
    {
        event.preventDefault();
        submit( term );
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input className="input" value={ term } onChange={ handleChange } />
        </form>
    );
}
export default SearchBar;