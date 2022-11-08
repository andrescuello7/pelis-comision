import "./LoginPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Pagination } from "react-bootstrap";
import CardComponent from "../../components/Card/CardComponent";

function LoginPage() {
    const [movies, setmovies] = useState([]);
    const [page, setpage] = useState(1);
    const [search, setsearch] = useState("games");

    //Peticion
    useEffect(() => {
        MethodGet();
    }, [page]);

    async function MethodGet() {
        let { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&page=${page}&apikey=a3cb6a25`)
        setmovies(data.Search)
    }

    //Buscador 
    function SearchMovie(e) {
        setsearch(e.target.value);
    }

    function ViewMovies() {
        MethodGet();
        console.log(movies)
    }

    const MapMovies = movies.map((item, i) => (<CardComponent key={i} image={item.Poster} title={item.Title} description={item.Type} />))

    return (
        <div className="bodyHome">
            <div className="pt-5 d-flex w-100 justify-content-center">
                <div className="d-flex w-50">
                    <input type="text" className="form-control" placeholder="Search" onChange={SearchMovie} />
                    <Button variant="primary" onClick={() => ViewMovies()} type="submit">
                        Search
                    </Button>
                </div>
            </div>
            <div className="mt-5 d-flex justify-content-evenly flex-wrap">
                {MapMovies}
            </div>
            <div className="mt-2 mb-5 w-100 d-flex justify-content-center">
                <Pagination>
                    <Pagination.Item onClick={() => setpage(1)}>{1}</Pagination.Item>
                    <Pagination.Item onClick={() => setpage(2)}>{2}</Pagination.Item>
                    <Pagination.Item onClick={() => setpage(3)}>{3}</Pagination.Item>
                    <Pagination.Item onClick={() => setpage(4)}>{4}</Pagination.Item>
                    <Pagination.Item onClick={() => setpage(5)}>{5}</Pagination.Item>
                    <Pagination.Item onClick={() => setpage(6)}>{6}</Pagination.Item>
                </Pagination>
            </div>
        </div>
    )
}
export default LoginPage;