import "./HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function HomePage() {
    const [movies, setmovies] = useState([]);
    const [search, setsearch] = useState("games");

    //Peticion
    useEffect(() => {
        MethodGet();
    }, [search]);

    async function MethodGet() {
        let { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a3cb6a25`)
        setmovies(data.Search)
    }

    //Buscador 
    function SearchMovie(e) {
        setsearch(e.target.value);
    }
    function ViewMovies() {
        console.log(movies)
    }

    return (
        <div className="bodyHome">
            <input type="text" placeholder="Search" onChange={SearchMovie} />
            <Button variant="primary" onClick={() => ViewMovies()} type="submit">
                Search 🔍
            </Button>
        </div>
    )
}
export default HomePage;